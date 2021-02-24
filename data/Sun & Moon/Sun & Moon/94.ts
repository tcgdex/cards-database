import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		147,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Signs of Evolution",
				fr: "Signes d'Évolution",
			},
			effect: {
				en: "Search your deck for a Dratini, a Dragonair, and a Dragonite, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Minidraco, un Draco et un Dracolosse dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
