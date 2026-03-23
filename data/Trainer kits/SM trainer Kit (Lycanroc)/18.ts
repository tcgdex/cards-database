import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Attaque Surprise",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Force",
			},
			damage: "40",
		},
	],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 152839
	}
}

export default card