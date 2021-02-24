import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 100,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Turn the Tables",
				fr: "Retournement de Situation",
			},
			effect: {
				en: "If 1 of your opponent's Pokémon used a GX attack during their last turn, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				fr: "Si l’un des Pokémon de votre adversaire a utilisé une attaque GX pendant son dernier tour, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
