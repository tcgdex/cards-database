import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Donphan",
		fr: "Donphan obscur",
		de: "Dunkles Donphan"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Tusk Toss",
				fr: "Koud'défense",
				de: "Tusk Toss"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, renvoyez le Pokémon Défenseur et toutes les cartes qui lui sont attachées dans la main de votre adversaire. Si c'est pile, votre adversaire choisit un des Pokémon de son Banc et l'échange contre le Pokémon Défenseur.",
				de: "If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giant Tusk",
				fr: "Défense géante",
				de: "Giant Tusk"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Plus ses défenses sont grosses, plus c'est un membre important du troupeau."
	},

	thirdParty: {
		cardmarket: 274655,
		tcgplayer: 84579
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
