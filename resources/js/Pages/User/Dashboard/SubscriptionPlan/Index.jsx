import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";
import { env } from "process";

export default function Index({auth, subscriptions}) {
    const selectSubscription = id => {
        router.post(
            route("user.dashboard.subscriptions.userSub", {
                sub: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({props}) => {
                    onSnapMidtrans(props.userSubscription);
                },
            },
        );
    }

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
          // Optional
          onSuccess: function(result){
            Inertia.visit(route('user.dashboard.index'));
          },
          // Optional
          onPending: function(result){
            console.log(result);
          },
          // Optional
          onError: function(result){
            console.log(result);
            },
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Subscription Plan</title>
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Pricing */}
                    {subscriptions.map((sub) => (
                        <SubscriptionCard
                            name={sub.name}
                            duration={sub.active}
                            price={sub.price}
                            features={JSON.parse([sub.features])}
                            key={sub.id}
                            isPremium={
                                sub.name === "Premium" || sub.name === "premium"
                            }
                            onSelectSubscription={() =>
                                selectSubscription(sub.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
