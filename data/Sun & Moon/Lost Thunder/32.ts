import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},
	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Commanding Queen",
				fr: "Reine Imposante",
			},
			effect: {
				en: "If you have 4 or fewer Grass Pokémon on your Bench, this attack does nothing.",
				fr: "Si vous avez 4 Pokémon Grass ou moins sur votre Banc, cette attaque ne fait rien.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
