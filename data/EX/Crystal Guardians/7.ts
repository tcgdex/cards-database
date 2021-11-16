import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Even Game",
				fr: "Partie équilibrée"
			},
			effect: {
				en: "Count the number of your opponent's Pokémon. Search your deck for up to that number of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Comptabilisez le nombre de Pokémon de votre adversaire. Choisissez dans votre deck autant de Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stadium Play",
				fr: "Jeu de stade"
			},
			effect: {
				en: "If you have a Stadium card in play, remove 1 damage counter from each of your Pokémon. If your opponent has a Stadium card in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous possédez une carte Stade en jeu, retirez 1 marqueur de dégât à chacun de vos Pokémon. Si votre adversaire possède une carte Stade en jeu, cette attaque inflige 10 dégâts à chacun des Pokémon de son Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
