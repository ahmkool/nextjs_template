import { TypeAnimation } from 'react-type-animation';

function Typing (){

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Typescript',
        500,
        'React',
        500,
        'Node'
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#F9A825", fontWeight: 'bold', display: 'inline-block', width: '38.5%'}}
      repeat={1}
    />
  );
};

export default Typing;