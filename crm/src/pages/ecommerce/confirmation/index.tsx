import React from "react";
import AppPage from "@crema/core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Confirmation = asyncComponent(
  () => import("../../../modules/ecommerce/Confirmation")
);
export default AppPage(() => <Confirmation />);
