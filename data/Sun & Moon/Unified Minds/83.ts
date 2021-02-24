import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Uxie",
		fr: "Créhelf",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		480,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Territory",
				fr: "Territoire Secret",
			},
			effect: {
				en: "If you have Mesprit and Azelf in play, apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
				fr: "Si vous avez Créfollet et Créfadet en jeu, la Faiblesse de chaque Pokémon (les vôtres et ceux de votre adversaire) est multipliée par 4.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
