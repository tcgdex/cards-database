import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Camerupt G",
		fr: "Camerupt ",
	},
	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earth Power",
				fr: "Telluriforce",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
