import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 130,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "All Out",
				fr: "À Fond",
			},
			effect: {
				en: "If you have no cards in your hand, this attack does 130 more damage.",
				fr: "Si vous n’avez aucune carte dans votre main, cette attaque inflige 130 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Giant Fangs",
				fr: "Crocs Géants",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
