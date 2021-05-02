import SidebarButton from '../../components/SidebarButton/SidebarButton'
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubscriptionIcon

} from '../../assets/icons/icons'

import SidebarLogoIcon from '../../assets/images/icons/logo.svg'
import './Sidebar.scss'

function Sidebar() {
    return (
        <div className="sidebar">
            <a href="javascript:void(0)" className="sidebar-logo">
                <img src={SidebarLogoIcon} alt=""/>
                <h2>Dashboard Kit</h2>
            </a>


            <SidebarButton className="sidebar-logo" title="Overview" icon={<OverviewIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Tickets" icon={<TicketsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Ideas" icon={<IdeasIcon/>}/>
            <SidebarButton className="sidebar-logo" title="ContactsAgents" icon={<ContactsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Agents" icon={<AgentsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Articles" icon={<ArticlesIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Settings" icon={<SettingsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Subscription" icon={<SubscriptionIcon/>}/>
        </div>
    )
}

export default Sidebar
