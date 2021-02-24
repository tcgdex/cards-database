import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		403,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evolutionary Advantage",
				fr: "Avantage Évolutif",
			},
			effect: {
				en: "If you go second, this Pokémon can evolve during your first turn.",
				fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
