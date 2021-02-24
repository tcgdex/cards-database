import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		776,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Explosive Jet",
				fr: "Souffle Explosif",
			},
			effect: {
				en: "Discard any amount of Fire Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez n’importe quel nombre d’Énergies Fire de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
