import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rambunctious Party",
				fr: "Méga-boum",
				de: "Wilde Party"
			},
			effect: {
				en: "Look at the top 5 cards of your deck. Choose as many Basic Pokémon as you like and put them onto your Bench. Shuffle the other cards back into your deck.",
				fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de Pokémon de base que vous le voulez et placez-les sur votre Banc. Mélangez les autres cartes avec votre deck.",
				de: "Schau dir die obersten 5 Karten deines Decks an. Wähle beliebig viele Basis-Pokémon-Karten und lege sie auf die Bank. Misch dein Deck anschließend."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie éclaboussante",
				de: "Regenplatscher"
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

	retreat: 2,

	description: {
		en: "A sweet sap leaks from its tail’s tip. Although not nutritious, the tail is pleasant to chew on."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279319,
		tcgplayer: 89333
	}
}

export default card
