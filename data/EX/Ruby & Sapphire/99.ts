import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lapras ex",
		fr: "Lokhlass ex",
		de: "Lapras ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 110,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Ball",
				fr: "Boule d'énergie",
				de: "Energy Ball"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 points de dégât plus 10 points de dégât supplémentaires pour chaque Énergie attachée à Lokhlass Ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 10 damage plu 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Confuse Ray"
			},
			effect: {
				en: "The Defending Pokémon is now Confused",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "The Defending Pokémon is now Confused."
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


	retreat: 3,

	thirdParty: {
		cardmarket: 275747,
		tcgplayer: 86626
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
