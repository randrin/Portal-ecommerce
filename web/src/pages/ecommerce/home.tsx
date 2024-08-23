

import asyncComponent from "@crema/components/AppAsyncComponent";

const Home = asyncComponent(
  () => import("../../modules/ecommerce/Home")
);
//export default AppPage(() => <Products />);
export default Home;