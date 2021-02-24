import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heal Block",
				fr: "Anti-Soin",
			},
			effect: {
				en: "If you have Solrock in play, Pokémon (both yours and your opponent's) can't be healed.",
				fr: "Si vous avez Solaroc en jeu, les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Lunar Blast",
				fr: "Explosion Lunaire",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
