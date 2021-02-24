import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		768,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Emergency Exit",
				fr: "Repli Tactique",
			},
			effect: {
				en: "If this Pokémon has 2 or fewer Energy attached to it, it has no Retreat Cost.",
				fr: "Si 2 Énergies ou moins sont attachées à ce Pokémon, il n’a pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "First Impression",
				fr: "Escarmouche",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
