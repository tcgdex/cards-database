import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		538,
	],
	hp: 100,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Freestyle Strike",
				fr: "Randori",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shoulder Throw",
				fr: "Projection Martiale",
			},
			effect: {
				en: "Does 80 damage minus 20 damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 80 dégâts moins 20 dégâts pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
