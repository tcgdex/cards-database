import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		126,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Magmar is an Evolved Pokémon, all Energy attached to Magmar are Fire Energy instead of their usual types.",
				fr: "Tant que Magmar est un Pokémon Évolué, toutes les Énergies qui lui sont attachées sont des Énergies  au lieu de leur type habituel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Burning Sensation",
				fr: "Sensation brûlante"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 40,

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
