import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magnéti",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Unit",
				fr: "Unité Solide",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
