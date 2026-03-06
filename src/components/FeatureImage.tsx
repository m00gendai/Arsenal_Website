interface Props{
    src: string
    alt: string
}

export default function FeatureImage({src, alt}:Props){
    return (
        <section className="content featureImage">
            <img src={`../src/assets/feature_${src}.png`} width="100%" alt={alt} />
        </section>
    )
}