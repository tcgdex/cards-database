import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Donphan with 1 of your Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez Donphan avec 1 des Pokémon de votre Banc, si vous en avez.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bash In",
				fr: "Cabosser",
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 70 damage plus 60 more damage.",
				fr: "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 70 dégâts plus 60 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
