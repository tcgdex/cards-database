import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		fr: "Regigigas",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Regi Form",
				fr: "Regi forme",
			},
			effect: {
				en: "If you have Regirock, Regice, and Registeel in play, the attack cost of Regigigas's attacks is Colorless less.",
				fr: "Si vous avez Regirock, Regice et Registeel en jeu, le Coût d'attaque des attaques de Regigigas est Colorless de moins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Power",
				fr: "Giga pouvoir",
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Regigigas does 40 damage to itself.",
				fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Regigigas s'inflige alors 40 dégâts.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
