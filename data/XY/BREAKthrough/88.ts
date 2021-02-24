import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
			},
			effect: {
				en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
