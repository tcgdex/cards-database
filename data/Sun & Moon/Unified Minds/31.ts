import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		662,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
