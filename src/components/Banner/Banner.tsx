import './style.scss'

interface Props {
    src: string;
}

export function Banner({src}: Props) {
	return (
		<div className="banner-container">
			<img src={src} className='banner-container_img' alt=""/>
			<div className="banner-container_overlay"></div>
			<div className="banner-container_text">
				Chez vous, partout et ailleurs
			</div>
		</div>
	);
}