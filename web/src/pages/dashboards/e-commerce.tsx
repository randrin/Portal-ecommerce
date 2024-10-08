import React from "react";
import AppPage from "@crema/core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const ECommerce = asyncComponent(
  () => import("../../modules/dashboards/ECommerce")
);
export default AppPage(() => <ECommerce />);
