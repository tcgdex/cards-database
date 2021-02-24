import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		589,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twineedle",
				fr: "Double-Dard",
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
