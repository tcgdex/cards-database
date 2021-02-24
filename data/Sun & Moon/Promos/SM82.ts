import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Shining Lugia",
		fr: "Lugia Brillant",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 130,
	types: [
		"Colorless",
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
				en: "Argent Wing",
				fr: "Aile Argentée",
			},
			effect: {
				en: "If your opponent's Active Pokémon has an Ability, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aero Force",
				fr: "Force Aérienne",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
