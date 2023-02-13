import Stories from './story/Stories'
import Posts from './posts/Posts'

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />    
            </div>
        </div>
    )
}