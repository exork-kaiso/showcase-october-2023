'use strict';

{
	// ハンバーガーメニュー
	const dialogElement = document.querySelector('.js-dialog');
	const dialogOpenButton = document.querySelector('.js-dialog-open');
	const dialogCloseButton = document.querySelector('.js-dialog-close');
	const dialogLinks = document.querySelectorAll('.js-dialogLink');

	dialogLinks.forEach(dialogLink => {
		dialogLink.addEventListener('click', () => {
			dialogElement.close();
			document.body.classList.remove('is-hideScrollbar');
		});
	});

	dialogOpenButton.addEventListener('click', () => {
		if (typeof dialogElement.showModal === 'function') {
			dialogElement.showModal();
		} else {
			alert('dialog要素をサポートしていないブラウザです。');
		}
	});

	dialogCloseButton.addEventListener('click', () => {
		dialogElement.close();
		document.body.classList.remove('is-hideScrollbar');
	});

	// タブの処理
	const tabuwakeLabelA = document.querySelector('#tabuwakeLabelA');
	const tabuwakeLabelB = document.querySelector('#tabuwakeLabelB');
	const tabusakeContentsA = document.querySelector('#tabuwakeContentsA');
	const tabusakeContentsB = document.querySelector('#tabuwakeContentsB');

	tabuwakeLabelA.addEventListener('click', () => {
		tabuwakeLabelA.classList.toggle('active');
		tabuwakeLabelB.classList.toggle('active');
		tabusakeContentsA.classList.toggle('active');
		tabusakeContentsB.classList.toggle('active');
	});

	tabuwakeLabelB.addEventListener('click', () => {
		tabuwakeLabelA.classList.toggle('active');
		tabuwakeLabelB.classList.toggle('active');
		tabusakeContentsA.classList.toggle('active');
		tabusakeContentsB.classList.toggle('active');
	});

	// アコーディオンUIの処理
	document.addEventListener('DOMContentLoaded', () => {
		setAccordion();
	});

	const setAccordion = () => {
		const details = document.querySelectorAll('.js-details');
		const RUNNING_VALUE = 'running';
		const IS_OPENED_CLASS = 'is-opened';

		details.forEach(element => {
			const summary = element.querySelector('.js-summary');
			const content = element.querySelector('.js-content');

			summary.addEventListener('click', event => {
				event.preventDefault();

				if (element.dataset.animStatus === RUNNING_VALUE) {
					return;
				}

				if (element.open) {
					element.classList.toggle(IS_OPENED_CLASS);

					const closingAnim = content.animate(
						closingAnimKeyframes(content),
						animTiming
					);

					element.dataset.animStatus = RUNNING_VALUE;

					closingAnim.onfinish = () => {
						element.removeAttribute('open');
						element.dataset.animStatus = '';
					};
				} else {
					element.setAttribute('open', 'true');

					element.classList.toggle(IS_OPENED_CLASS);

					const openingAnim = content.animate(
						openingAnimKeyframes(content),
						animTiming
					);
					element.dataset.animStatus = RUNNING_VALUE;

					openingAnim.onfinish = () => {
						element.dataset.animStatus = '';
					};
				}
			});
		});
	};

	const animTiming = {
		duration: 400,
		easing: 'ease-out',
	};

	// アコーディオンUIを閉じる
	const closingAnimKeyframes = content => [
		{
			height: content.offsetHeight + 'px',
			opacity: 1,
		},
		{
			height: 0,
			opacity: 0,
		},
	];

	// アコーディオンUIを開く
	const openingAnimKeyframes = content => [
		{
			height: 0,
			opacity: 0,
		},
		{
			height: content.offsetHeight + 'px',
			opacity: 1,
		},
	];
}
