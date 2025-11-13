import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Omanyte",
		fr: "Amonita obscur",
		de: "Dunkles Amonitas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Cannon",
				fr: "Artillerie à O",
				de: "Water Cannon"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts pour chaque  carte Énergie attachée à Amonita obscur. N'appliquez ni la Faiblesse, ni la Résistance. Vous ne pouvez pas infliger plus de 30 dégâts de cette manière.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each  Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon antique possédait 10 tentacules, qu'il utilisait pour nager dans l'océan."
	},

	thirdParty: {
		cardmarket: 274689,
		tcgplayer: 84634
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
