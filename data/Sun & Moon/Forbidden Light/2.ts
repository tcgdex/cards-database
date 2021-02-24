import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 160,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tropical Shake",
				fr: "Balancement Tropical",
			},
			effect: {
				en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can't add more than 100 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
