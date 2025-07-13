import Image from 'next/image';
import style from './service.module.css';
const Service = () => {
  return (
    <div>
      <h1 className={style['common-heading']}>Our Services</h1>
      <p>We offer a variety of services to help you succeed.</p>
      <div className={style['amenities-container']}>
        <div className={style['amenity']} >
          <Image src="/wifi.png" width={500} height={500} alt="Free Wifi" className={style['amenity-img']} />
          <h3>Free Wifi</h3>
        </div>
        <div className={style['amenity']}>
          <Image src="/parking.png" width={500} height={500} alt="Free Parking" className={style['amenity-img']} />
          <h3>Free Parking</h3>
        </div>
        <div className={style['amenity']}>
          <Image src="/washing_machine.png" width={500} height={500} alt="Washing Machine" className={style['amenity-img']} />
          <h3>Washing Machine</h3>
        </div>
        <div className={style['amenity']}>
          <Image src="/cctv.png" width={500} height={500} alt="CCTV" className={style['amenity-img']} />
          <h3>CCTV</h3>
        </div>
      </div>
    </div>
  );
}

export default Service;