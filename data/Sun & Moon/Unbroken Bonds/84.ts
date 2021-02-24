import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Scratch",
				fr: "Griffe Continue",
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
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
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
