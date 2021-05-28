import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Wish",
				fr: "Voeu Soin",
			},
			effect: {
				en: "Flip a coin until you get tails. Remove a number of damage counters equal to the number of heads from 1 of your Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous obtenez de faces.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may switch Lopunny with 1 of your Benched Pokémon.",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Vous pouvez échanger Lockpin avec 1 des Pokémon de votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
