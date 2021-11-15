import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shining Horn",
				fr: "Corne brillante"
			},
			effect: {
				en: "As long as Skarmory is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
				fr: "Tant qu'Airmure est le seul Pokémon que vous ayez en jeu, les Pokémon de base de votre adversaire ne peuvent pas attaquer."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cry for Help",
				fr: "Appel à l'aide"
			},
			effect: {
				en: "Search your deck for a Metal Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'acier"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Skarmory by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Airmure par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
