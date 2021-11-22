import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Gardevoir ex",
		fr: "Gardevoir ex"
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
				fr: "Réaction"
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes."
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
				fr: "Tempête Psy"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to all Pokemon in play.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées à tous les Pokémon en jeu."
			},
			damage: "10×",

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





}

export default card
