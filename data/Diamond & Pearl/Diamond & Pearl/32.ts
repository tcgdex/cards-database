import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		de: "Meditalis"
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
				de: "Kraftwelle"
			},
			effect: {
				en: "Count the number of damage counters on Medicham. Put that many damage counters on 1 of your opponent's Pokémon.",
				fr: "Comptabilisez le nombre de marqueurs de dégât sur Charmina. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				de: "Zähle die Anzahl der Schadensmarken, die auf Meditalis liegen. Lege die gleiche Anzahl Schadensmarken auf 1 Pokémon deines Gegners."
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
				de: "Wirbelkick"
			},
			effect: {
				en: "Medicham does 20 damage to itself.",
				fr: "Charmina s'inflige 20 dégâts.",
				de: "Meditalis fügt sich selbst 20 Schadenspunkte zu."
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
	},

	thirdParty: {
		cardmarket: 277531
	}
}

export default card
