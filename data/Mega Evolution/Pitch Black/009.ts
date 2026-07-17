import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
		de: "Mit dem entzündlichen Gas in seinem Körper erzeugt es Hitze. Die gelben Stellen an seinem Bauch werden besonders heiß."
	},

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		'es-mx': "Sizzlipede",
		de: "Thermopod"
	},

	illustrator: "Yuya Oka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [850],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Controlled Burn",
			de: "Brandrodung"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top card from your opponent's deck",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		name: {
			en: "Bug Out",
			de: "Käferkomplott"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: "50x",

		effect: {
			en: "Reveal the bottom 7 cards of your deck. This attack does 50 damage for each Pokémon with the Bug Panic move. Shuffle the Pokémon cards back into your deck and discard the other cards.",
			de: "Zeige deinem Gegner die untersten 7 Karten deines Decks, und diese Attacke fügt für jedes Pokémon, das du dort findest und das die Attacke Käferkomplott hat, 50 Schadenspunkte zu. Mische anschließend alle gezeigten Pokémon zurück in dein Deck. Lege die anderen Karten auf deinen Ablagestapel."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895797,
				tcgplayer: 704766
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895797,
				tcgplayer: 704766
			}
		},
	],
}

export default card
