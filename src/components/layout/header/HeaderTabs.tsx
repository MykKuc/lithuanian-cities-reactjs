import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {Link} from "react-router-dom";


const HeaderTabs =() => {
    return(
        <header>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab><Link to="/">Tab 1</Link></Tab>
                <Tab><Link to="/vilnius">Tab 1</Link>Tab 2</Tab>
                <Tab><Link to="/kaunas">Tab 2</Link></Tab>
                <Tab><Link to="/klaipeda">Tab 1Tab 2</Link></Tab>
                <Tab><Link to="/siauliai">Tab 1Tab 1Tab 2</Link></Tab>

            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </header>
    )
}

export default HeaderTabs;
