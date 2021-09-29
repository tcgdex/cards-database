import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d’énergie",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Blissey.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Leuphorie.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
			},
			effect: {
				en: "Blissey does 40 damage to itself.",
				fr: "Leuphorie s’inflige 40 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Anyone who takes even one taste of Blissey’s egg becomes unfailingly caring and pleasant to everyone."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
