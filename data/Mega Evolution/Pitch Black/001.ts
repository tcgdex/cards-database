import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Delicious fruits grew out from around its neck because it always ate the same kind of fruit.",
		de: "Da es immer nur die gleichen Früchte aß, begannen köstliche Früchte an seinem Hals zu wachsen."
	},

	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		'es-mx': "Tropius",
		de: "Tropius"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fruity Aroma",
			de: "Fruchtiges Aroma"
		},

		cost: ["Colorless"],

		effect: {
			en: "Look at the top 6 cards of your deck. Reveal as many Pokémon as you like from there and put them in your hand. Then, shuffle the rest of the cards back into the deck",
			de: "Schau dir die obersten 6 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		name: {
			en: "Solar Beam",
			de: "Solarstrahl"
		},

		cost: ["Grass", "Colorless"],

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895789,
				tcgplayer: 704758
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895789,
				tcgplayer: 704758
			}
		},
	],
}

export default card
