import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
	},
	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		399,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Régénération α",
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drench",
				fr: "Trempage",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 20 more damage.",
				fr: "Si de l'Énergie Water est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
