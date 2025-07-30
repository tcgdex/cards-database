import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ancient Ruins",
		de: "Uralte Ruinen"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "Diese Karte bleibt im Spiel wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Einmal während des Zuges jedes Spielers (vor dem Angriff) kann dieser Spieler, falls er keine Unterstützer-Karte gespielt hat, die Karten auf seiner Hand seinem Gegner zeigen. Wenn dieser Spieler seine Karten zeigt und sich keine Unterstützer-Karte darunter befindet, zieht er eine Karte."
	},

	thirdParty: {
		cardmarket: 275377,
		tcgplayer: 83552
	}
}

export default card
