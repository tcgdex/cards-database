import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Qulbutoké par les Pokémon-ex de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flip Over",
				fr: "Faire ressort"
			},
			effect: {
				en: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				fr: "Qulbutoké s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
