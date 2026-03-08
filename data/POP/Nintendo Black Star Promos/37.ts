import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Kyogre ex",
		fr: "Kyogre ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Frenzy",
				fr: "Folie furieuse"
			},
			effect: {
				en: "As long as your opponent has Groudon, Groudon ex, Rayquaza, or Rayquaza ex in play, Kyogre ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que votre adversaire possède Groudon, Groudon ex, Rayquaza, Rayquaza ex en jeu, les attaques de Kyogre ex infligent 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Supply",
				fr: "Source aqua"
			},
			effect: {
				en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie de base de votre main à 1 de vos Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Tsunami",
				fr: "Tsunami"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 40,

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
