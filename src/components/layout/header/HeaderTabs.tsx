import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {Link} from "react-router-dom";


const HeaderTabs =() => {
    return(
        <header>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab><Link to="/">Main Page</Link></Tab>
                <Tab><Link to="/vilnius">Vilnius</Link></Tab>
                <Tab><Link to="/kaunas">Kaunas</Link></Tab>
                <Tab><Link to="/klaipeda">Klaipeda</Link></Tab>
                <Tab><Link to="/siauliai">Siauliai</Link></Tab>
            </TabList>
        </Tabs>
        </header>
    )
}

export default HeaderTabs;
