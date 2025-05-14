function Summary(){
    return (<>
        <p className="text-4xl mb-8">About me</p>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">I earned my Master&apos;s degree in Computer Science from EPFL in Lausanne, Switzerland.</p>
            <p className="mb-5">My journey so far has taken me to Amazon, Google, and a number of exciting startups.</p>
        </article>
    </>);
}

export default Summary;