import Image from 'next/image'

const Image = () => {
    return (
        <div className=" d-flex justify-content-center" id="padding-imagen">
            <Image src="/images/vision.png" alt="image" width={300} style={{marginTop: '70px'}} />
        </div>
    )
}

export default Image