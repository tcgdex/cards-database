import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
			},
			effect: {
				en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
				fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280029,
		tcgplayer: 88458
	}
}

export default card
