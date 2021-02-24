import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		401,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Hunch",
				fr: "Insec'tuition",
			},
			effect: {
				en: "Search your deck for up to 3 Grass Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 Pokémon Grass dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
