import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Underground Lake",
		de: "Unterirdischer See"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn, that player may put an Omanyte or a Kabuto card from his or her discard pile onto his or her Bench. (Cards put on the Bench this way are considered Basic Pokémon.)",
		de: "Einmal während jedes Zugs eines Spielers kann dieser Spieler eine Amonitas- oder Kabuto-Karte aus seinem Ablagestapel auf seine Bank legen. (Karten, die auf diese Weise auf die Bank gelegt werden, gelten als Basis-Pokémon.)"
	},

	thirdParty: {
		cardmarket: 275399,
		tcgplayer: 90157
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
