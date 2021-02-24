import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Audino-EX",
		fr: "Nanméouïe-EXEX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		531,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drain Slap",
				fr: "Baffe Sangsue",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la Vague",
			},
			effect: {
				en: "This attack does 10 more damage for each of your Benched Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
