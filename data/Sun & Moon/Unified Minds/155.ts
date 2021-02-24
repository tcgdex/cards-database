import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		611,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
			},

			damage: 70,

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
