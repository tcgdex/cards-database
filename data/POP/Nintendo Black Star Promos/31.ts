import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Moltres ex",
		fr: "Sulfura ex"
	},
	illustrator: "Ken Ikuji",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronized Lift",
				fr: "Élévation synchronisée"
			},
			effect: {
				en: "As long as you have Articuno ex and Zapdos ex in play, the Retreat Cost for Moltres ex is 0.",
				fr: "Tant qu'Artikodin ex et Electhor ex sont en jeu, le Coût de retraite de Sulfura ex est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Gift",
				fr: "Cadeau de feu"
			},
			effect: {
				en: "You may move a Fire Energy card attached to Moltres ex to 1 of your Pokémon.",
				fr: "Vous pouvez déplacer 1 carte Énergie  attachée à Sulfura ex vers 1 de vos Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Scorching Wing",
				fr: "Aile brûlante"
			},
			effect: {
				en: "Discard all Fire Energy attached to Moltres ex.",
				fr: "Défaussez toutes les Énergies  attachées à Sulfura ex."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
