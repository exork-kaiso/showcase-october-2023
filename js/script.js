'use strict';

{
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
}
