function Image() {
    return (
        <img className="imgBox" src={require("./assets/zoom-square.png")} alt={"Profile or artwork image"}/>
    );
}

export default function Gallery() {
    return (
        <section>
            <h3>Profile image</h3>
            <Image />
        </section>
    );
}

