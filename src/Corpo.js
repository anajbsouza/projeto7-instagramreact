import Stories from './story/Stories'
import Posts from './posts/Posts'
import SideBar from './SideBar'

export default function Corpo() {
    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts/>
            </div>
            <SideBar/>
        </div>
    )
}