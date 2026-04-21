import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Spark",
				fr: "Étincelle de dragon",
				de: "Dragon Spark"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Retaliation",
				fr: "Vengeance totale",
				de: "Full Retaliation"
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on all of your Magikarp.",
				fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégât sur tous vos Magicarpes.",
				de: "Does 20 damage times the number of damage counters on all of your Magikarp."
			},
			damage: "20x",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulverize",
				fr: "Pulvériser",
				de: "Pulverize"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 50 more damage."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 85991,
		cardmarket: 276411
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
