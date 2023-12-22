import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images }) {
  console.log('ImageList:', images);

  const listOfImages = images.map(item => <ImageShow key={item.id} image={item} />);

  return <div className="image-list">{listOfImages}</div>;
}

export default ImageList;