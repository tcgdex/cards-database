import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Igglybuff"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [174],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It likes to sing but is not yet good at it. With praise and encouragement, it will get better little by little."
	},

	attacks: [{
		name: {
			en: "Bouncy Circle"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon that has a maximum HP of 30."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907727,
				tcgplayer: 716509
			}
		}
	],
}

export default card
