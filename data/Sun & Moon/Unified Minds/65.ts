import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		603,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Overspark",
				fr: "Max’Étincelle",
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
