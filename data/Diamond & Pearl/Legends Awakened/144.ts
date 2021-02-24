import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psybarrier",
				fr: "Barrage psy",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Mewtwo par un Pokémon de votre adversaire n'étant pas un Pokémon Évolué.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Giga Burn",
				fr: "Giga brûlure",
			},
			effect: {
				en: "Discard all Energy attached to Mewtwo.",
				fr: "Défaussez toutes les Énergies attachées à Mewtwo.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
