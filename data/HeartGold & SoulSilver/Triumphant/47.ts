import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		17,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
