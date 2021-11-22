import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	evolveFrom: {
		fr: "Magicarpe",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Sea Spray",
				fr: "Spray de mer",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, draw a card.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, piochez une carte.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure."
	}
}

export default card
