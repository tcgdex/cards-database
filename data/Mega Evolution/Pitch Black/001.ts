import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

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
			en: "Fruity Aroma"
		},

		cost: ["Colorless"],

		effect: {
			en: "Look at the top 6 cards of your deck. Reveal as many Pokémon as you like from there and put them in your hand. Then, shuffle the rest of the cards back into the deck"
		}
	}, {
		name: {
			en: "Solar Beam"
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
