import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";

export default function Index({auth, subscriptions}) {
    const selectSubscription = id => {
        router.post(
            route("user.dashboard.subscriptions.userSub", {
                sub: id,
            })
        );
    }
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Subscription Plan</title>
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
                            isPremium={sub.name === "Premium" || sub.name === "premium"}
                            onSelectSubscription={() => selectSubscription(sub.id)}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
