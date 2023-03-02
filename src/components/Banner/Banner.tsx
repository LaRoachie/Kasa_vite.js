import './style.scss'

interface Props {
	src: string;
	title: string;
}

export function Banner({ src, title }: Props) {
	return (
		<div className="banner-container">
			<img src={src} className='banner-container_img' alt="" />
			<div className="banner-container_overlay"></div>
			<div className="banner-container_text">{title}</div>
		</div>
	);
}