import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Machamp GL",
		fr: "Mackogneur  Niv. 64",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 100,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brush Off",
				fr: "Lancer",
			},
			effect: {
				en: "Put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward. (If your opponent doesn't have any Benched Pokémon, this attack does nothing.)",
				fr: "Placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck. (Si votre adversaire ne possède pas de Pokémon de Banc, cette attaque est sans effet).",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
