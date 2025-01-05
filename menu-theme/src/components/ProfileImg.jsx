
import profilePic from '../assets/zoom-square.png';
import './index.css'

export class ProfileImg extends Component {
  render() {
    return (
      <>
      <div className='imgBox'>
        <img src={profilePic} alt='Photo of Jessica' />
      </div><div>
          <h1>Jessica Kincaid</h1>

          <h3>Side Projects.</h3>
        </div>
        </>
    )
  }
}

export default ProfileImg;