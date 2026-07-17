import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Silvally",
		fr: "Silvallié",
		es: "Silvally",
		'es-mx': "Silvally",
		de: "Amigento"
	},

	illustrator: "DOM",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [773],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Type: Null"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Call a Buddy"
		},

		effect: {
			en: "Once during your turn (before your attack), if you have 0 cards in your hand, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			en: "Air Slash"
		},

		cost: ["Colorless"],

		damage: 130,

		effect: {
			en: "Discard 1 Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895880,
				tcgplayer: 704852
			}
		},
	],
}

export default card
