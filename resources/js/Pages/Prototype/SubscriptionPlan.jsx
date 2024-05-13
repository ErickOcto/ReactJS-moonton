import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan() {
  return (
      <Authenticated>
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
                  {/* Basic */}
                  <SubscriptionCard
                      name="Basic"
                      duration={6}
                      price={200000}
                      features={["Feature 1", "Feature 2", "Feature 3"]}
                  />
                  {/* For Greatest */}
                  <SubscriptionCard
                      isPremium
                      name="Premium"
                      duration={12}
                      price={300000}
                      features={[
                          "Feature 1",
                          "Feature 2",
                          "Feature 3",
                          "Feature 4",
                          "Feature 5",
                          "Feature 6",
                      ]}
                  />
              </div>
          </div>
      </Authenticated>
  );
}
