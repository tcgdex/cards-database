import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Corphish",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Pinchers",
				fr: "Pinces puissantes"
			},
			effect: {
				en: "As long as Crawdaunt is your Active Pokémon, when any of your Active Pokémon does damage to the Defending Pokémon, the attack does 10 more damage (before applying Weakness and Resistance).",
				fr: "Tant que Colhomard est votre Pokémon Actif, dès qu'un de vos Pokémon Actifs inflige des dégâts aux Pokémon Défenseurs, cette attaque inflige 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
