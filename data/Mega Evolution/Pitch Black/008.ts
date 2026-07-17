import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Delphox ex",
		fr: "Méga-Goupelin-ex",
		es: "Mega-Delphox ex",
		'es-mx': "Mega-Delphox ex",
		de: "Mega-Fennexis-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [655],
	hp: 350,
	types: ["Fire"],

	evolveFrom: {
		en: "Braixen"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Trick Portal"
		},

		cost: ["Fire"],

		effect: {
			en: "Look at the top 9 cards of your deck. You may choose any number of Pokemon you find there and put them onto your Bench. Shuffle the other cards back into your deck."
		}
	}, {
		name: {
			en: "Eerie Glow"
		},

		cost: ["Fire", "Colorless", "Colorless"],

		damage: 200,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895796,
				tcgplayer: 704765
			}
		},
	],
}

export default card
