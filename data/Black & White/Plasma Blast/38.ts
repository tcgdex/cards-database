import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		pt: "Azelf",
		de: "Tobutz"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 60,

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
				en: "Trading Places",
				fr: "Permutation",
				de: "Platztausch"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyjamming",
				fr: "Distribution Psy",
				de: "Psy-Störung"
			},
			effect: {
				en: "Move as many Special Energy attached to your opponent's Pokémon to your opponent's other Pokémon in any way you like.",
				fr: "Déplacez autant d'Énergies spéciales attachées aux Pokémon de votre adversaire vers d'autres Pokémon de votre adversaire, de la manière que vous voulez.",
				de: "Verschiebe beliebig viele der an die Pokémon deines Gegners angelegten Spezial-Energien nach Belieben auf die anderen Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When Azelf flew, people gained the determination to do things. It was the birth of willpower.",
		de: "Als Tobutz flog, erlangten Menschen die Entschlossenheit. Es war die Geburt der Willenskraft."
	},

	thirdParty: {
		cardmarket: 281059,
		tcgplayer: 83676
	}
}

export default card
