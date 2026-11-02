import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [511],

	description: {
		en: "This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic."
	},

	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless"
		],

		name: {
			en: "Collect",
			fr: "Collecte"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],

		name: {
			en: "Scratch",
			fr: "Griffe"
		},

		damage: 20
	}],

	name: {
		en: "Pansage",
		fr: "Feuillajou"
	},

	rarity: "None",
	hp: 70,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281779,
				tcgplayer: 87937
			}
		}
	], 

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,
}

export default card

