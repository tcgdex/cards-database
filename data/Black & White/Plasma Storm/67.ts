import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		569,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ensnarl",
				fr: "Empêtrement",
			},
			effect: {
				en: "Does 20 damage times the number of Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 20 dégâts multipliés par le nombre de Colorless dans le coût de Retraite du Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Ducts",
				fr: "Double Boyau",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
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
