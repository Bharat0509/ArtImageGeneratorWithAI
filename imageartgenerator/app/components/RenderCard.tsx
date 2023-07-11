import Card from "./Card";

type Image = {
    _id: string;
    name: string;
    prompt: string;
    public_id: string;
    image: string;
};
type ImagesType = {
    images: Image[];
};
type CardsProps = {
    data?: Image[];
    title: string;
};
const RenderCards = ({ data, title }: CardsProps) => {
    if (data && data.length > 0) {
        return (
            <>
                {data!.map((post, ind) => (
                    <Card key={ind} {...post} />
                ))}
            </>
        );
    }
    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
            {title}
        </h2>
    );
};
export default RenderCards;
