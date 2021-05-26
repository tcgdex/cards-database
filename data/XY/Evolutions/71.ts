import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Conversion 3",
				fr: "Conversion 3",
			},
			effect: {
				en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. The Defending Pokémon's Weakness is now that type until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "Choisissez le type Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy ou Dragon. La Faiblesse du Pokémon Défenseur est maintenant de ce type jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
