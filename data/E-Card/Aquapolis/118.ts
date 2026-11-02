import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Apricorn Forest",
		fr: "Forêt de noigrumes",
		de: "Apricorn Forest*"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Trainer",
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), if that player's Bench isn't full, that player flips a coin. If heads, that player shows his or her opponent a basic Energy card from his or her hand. Then, that player searches his or her deck for a Basic Pokémon card of the same type (color) as the revealed Energy card and puts it onto his or her Bench. The player shuffles his or her deck afterward.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Einmal während des Zuges jedes Spielers (vor seinem Angriff) wirft der Spieler eine Münze, wenn seine Bank nicht voll ist. Bei „Kopf“ zeigt dieser Spieler seinem Gegner eine Basis-Energiekarte, die er auf seiner Hand hat. Dann durchsucht dieser Spieler sein Deck nach einer Basis-Pokémonkarte desselben Typs (derselben Farbe) wie die vorgezeigte Energiekarte und legt sie auf seine Bank. Dieser Spieler mischt danach sein Deck."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83563,
				cardmarket: 275194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83563,
				cardmarket: 275194
			}
		},
	]
}

export default card
