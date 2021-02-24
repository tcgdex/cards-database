import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		111,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Dig Out",
				fr: "Excavation",
			},
			effect: {
				en: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
				fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
