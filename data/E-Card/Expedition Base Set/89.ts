import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Têtarte",
		de: "Quaputzi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [246],

	hp: 40,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Koud'poing",
				de: "Hieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Bulles d'O",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf'ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88264,
				cardmarket: 274964
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
