import React from "react";
import AppPage from "@crema/core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Wall = asyncComponent(() => import("../../../modules/apps/Wall"));
export default AppPage(() => <Wall />);
