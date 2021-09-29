import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Timid Tackle",
				fr: "Charge timide",
			},
			effect: {
				en: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
				fr: "Granbull s’inflige 20 dégâts. Échangez Granbull avec l’un des Pokémon de votre Banc.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chomp",
				fr: "Mâche",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Granbull.",
			},
			damage: "40+",

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
		en: "Because its fangs are too heavy, it always keeps its head tilted down. However, its bite is powerful."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
