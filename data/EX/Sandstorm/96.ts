import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Gardevoir ex",
		fr: "Gardevoir ex",
		de: "Guardevoir ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Feedback",
				fr: "Réaction",
				de: "Feedback"
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				de: "Count the number of cards in your opponents hand. Put that many damage counters on the Defending Pokémon"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psystorm",
				fr: "Tempête Psy",
				de: "Psystorm"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to all Pokemon in play.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées à tous les Pokémon en jeu.",
				de: "Does 10 damage times the total number of Energy attached to all Pokémon in play."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275873,
		tcgplayer: 85641
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
