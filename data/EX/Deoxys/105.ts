import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Latias Star",
		fr: "Latias ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Light",
				fr: "Lumière soignante"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Latias Star).",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon (Latias  inclus)."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Psychic",
			],
			name: {
				en: "Shooting Star",
				fr: "Étoile filante"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, discard all Energy cards attached to Latias Star and this attack does 50 damage plus 100 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, défaussez toutes les cartes Énergie attachées à Latias ☆. Cette attaque inflige 50 dégâts plus 100 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
