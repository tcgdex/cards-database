import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Farfetch’d",
		fr: "Canarticho",
		de: "Porenta"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spin Turn",
				fr: "Tournoyer",
				de: "Absatzdreher"
			},
			effect: {
				en: "Switch Farfetch’d with 1 of your Benched Pokémon.",
				fr: "Échangez Canarticho avec un Pokémon de votre Banc.",
				de: "Tausche Porenta gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "If it eats the plant stalk it carries as emergency rations, it runs off in search of a new stalk."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
}

export default card
