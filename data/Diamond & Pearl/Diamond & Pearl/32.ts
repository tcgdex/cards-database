import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Force Palm",
				fr: "Forte-Paume",
			},
			effect: {
				en: "Count the number of damage counters on Medicham. Put that many damage counters on 1 of your opponent's Pokémon.",
				fr: "Comptabilisez le nombre de marqueurs de dégât sur Charmina. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spinning Kick",
				fr: "Coup tournant",
			},
			effect: {
				en: "Medicham does 20 damage to itself.",
				fr: "Charmina s'inflige 20 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il a développé son sixième sens grâce au yoga. Ses mouvements sont gracieux."
	}
}

export default card
