import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reflective Shield",
				fr: "Bouclier Réflexion",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 5 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psy Report",
				fr: "Observation Psychique",
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
