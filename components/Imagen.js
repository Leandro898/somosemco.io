import Image from 'next/image'

const Image = () => {
    return (
        <div className=" d-flex justify-content-center" id="padding-imagen">
            <img src="/images/vision.png" alt="imag" width={300} style={{marginTop: '70px'}} />
        </div>
    )
}

export default Image