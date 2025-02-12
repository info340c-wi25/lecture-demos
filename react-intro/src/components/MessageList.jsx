function HelloMessage(props) {
    // console.log(props);
    // return <li>Hello World!</li>;
    // const msg = props.msg ;
    // const isLoud = props.isLoud;
    // console.log(msg, isLoud)

    const {msg, isLoud} = props; // destructuring the props
 
    let text=msg;
 
    if (isLoud) {
        text=text.toUpperCase();
    }
    
    return <li>{text}</li>;
}

function GoodbyeMessage(props) {
    return <li>See ya later!</li>;
}

export function MessageList(props) {

    

    return (
        <div>
            <ul>
                <HelloMessage /> {/* A HelloMessage component */}
                <HelloMessage msg="Hola Amigo!!!" isLoud={true} />
                <HelloMessage msg="shhhh" isLoud={false} />
                <HelloMessage msg="Hola loudly" isLoud={true} />
                <GoodbyeMessage /> {/* A GoodbyeMessage component */}
            </ul>
        </div>
    );
}