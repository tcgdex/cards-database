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
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before he or she attacks), if he or she has not played a Supporter card, that player may reveal his or her hand to his or her opponent. If that player reveals his or her hand and there is no Supporter card there, that player draws a card.",
		de: "Diese Karte bleibt im Spiel wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Einmal während des Zuges jedes Spielers (vor dem Angriff) kann dieser Spieler, falls er keine Unterstützer-Karte gespielt hat, die Karten auf seiner Hand seinem Gegner zeigen. Wenn dieser Spieler seine Karten zeigt und sich keine Unterstützer-Karte darunter befindet, zieht er eine Karte."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83552,
				cardmarket: 275377
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83552,
				cardmarket: 275377
			},
		},
	],
}

export default card
