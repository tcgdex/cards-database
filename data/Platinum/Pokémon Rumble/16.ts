import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Bibarel",
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bidoof",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 278857
	},

	variants:[
		{
			type:"normal"
		}
	]
}

export default card
