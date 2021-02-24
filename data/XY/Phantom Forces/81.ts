import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tender Vengeance",
				fr: "Douce Vengeance",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on each of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur chacun de vos Pokémon de Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charge Dash",
				fr: "Attaque Précipitée",
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
