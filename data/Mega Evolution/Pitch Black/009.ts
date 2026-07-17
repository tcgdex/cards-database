import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

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
			en: "Controlled Burn"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top card from your opponent's deck"
		}
	}, {
		name: {
			en: "Bug Out"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: "50x",

		effect: {
			en: "Reveal the bottom 7 cards of your deck. This attack does 50 damage for each Pokémon with the Bug Panic move. Shuffle the Pokémon cards back into your deck and discard the other cards."
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
