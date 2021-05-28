import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Mothim",
		fr: "Papilord",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		414,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Disturbance Scales",
				fr: "Écailles tapageuses",
			},
			effect: {
				en: "Any damage done by attacks from your Pokémon to the Defending Pokémon isn't affected by Resistance.",
				fr: "Tous dégâts infligés par des attaques de vos Pokémon sur le Pokémon Défenseur ne sont pas affectés par la Résistance.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Get Help",
				fr: "À l'aide",
			},
			effect: {
				en: "Does 30 damage times the number of different types of Wormadam on your Bench.",
				fr: "Inflige 30 dégâts multipliés par le nombre de types différents de Cheniselle sur votre Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Quick Touch",
				fr: "Touche rapide",
			},
			effect: {
				en: "You may switch Mothim with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Mothim as you like to the new Active Pokémon.",
				fr: "Vous pouvez échanger Papilord avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Papilord que vous le voulez.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
