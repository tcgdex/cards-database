import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		de: "Tentoxa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Shield",
				fr: "Bouclier réactif",
				de: "Reactive Shield"
			},
			effect: {
				en: "As long as Tentacruel has any React Energy cards attached to it, prevent all effects, including damage, done to any of your Tentacruel in play by attacks from your opponent's Pokémon-ex.",
				fr: "Tant que Tentacruel possède des cartes Énergie réaction, prévenez tous les effets, dégâts inclus, infligés par des attaques de Pokémon-ex de votre adversaire aux Tentacruels que vous avez en jeu",
				de: "As long as Tentacruel has any React Energy cards attached to it, prevent all effects, including damage, done to any of your Tentacruel in play by attacks from your opponent's Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau",
				de: "Water Arrow"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Strikes",
				fr: "Attaques furieuses",
				de: "Futy Strikes"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 3 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276922,
		tcgplayer: 89876
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		}
	]
}

export default card
