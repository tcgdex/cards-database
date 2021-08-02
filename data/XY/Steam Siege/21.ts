import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Talonflame BREAK",
		fr: "Flambusard TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon.",
			},
			damage: 150,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Boutefeu",
			},
			effect: {
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],

	retreat: 0
}

export default card
