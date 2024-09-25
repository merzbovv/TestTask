import { useEffect, useState } from "react";

/**
 * Вычисление ширины и высоты экрана;
 * 0 - ширина;
 * 1 - высота;
 */
export default function useSize()
{
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	useEffect(() =>
	{
		const windowSizeHandler = () =>
		{
			setWindowSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener("resize", windowSizeHandler);

		return () =>
		{
			window.removeEventListener("resize", windowSizeHandler);
		};
	}, []);

	return windowSize;
};