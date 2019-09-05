/* BGDSS - BanG Dream Stage Simulator V0.1b
 * By KCFindstr @ github
 * For bug report / feature request / development support,
 * please email me at z792491320[at]gmail.com
 */

import game from './game/index.js';
import config from './game/config.js';

window.startGame = function() {
	if (game.engine) {
		game.engine.destroy(true);
	}
	game.engine = new Phaser.Game(config);
}

document.onreadystatechange = () => {
	window.startGame();
}