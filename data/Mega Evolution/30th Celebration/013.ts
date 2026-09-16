import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Victini"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [494],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	description: {
		en: "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter."
	},

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "V-Flame"
		},

		cost: ["Fire", "Colorless"],

		damage: 50,
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907619,
				tcgplayer: 696830
			}
		}
	],
}

export default card
