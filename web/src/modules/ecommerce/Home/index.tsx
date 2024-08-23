import { portfolioData } from '@crema/mockapi/fakedb/extraPages';
import { PortfolioTabs } from '@crema/modules/extraPages/Portfolio';

const Home = () => {
    return <PortfolioTabs portfolio={portfolioData.portfolio} />;
}

export default Home