export default function scrollToElem(id: string): void
{
	const elementRect: DOMRect = (document.getElementById(id) as HTMLDivElement).getBoundingClientRect();
	window.scrollTo({
		top: elementRect.top,
		left: 0,
		behavior: "smooth"
	});
}