import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Carbink BREAK",
		fr: "Strassie TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Carbink",
		fr: "Strassie",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Diamond Gift",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Cadeau de Diamant",
			},
			effect: {
				fr: "Attachez 2 cartes Énergie de votre pile de défausse à l'un de vos Pokémon Fighting.",
			},
			damage: 20,

		},
	],

	retreat: 0
}

export default card
