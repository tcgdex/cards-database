import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886435,
				tcgplayer: 693550
			}
		},
	],

	name: {
		en: "Sudowoodo"
	},

	illustrator: "GOTO minori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Journey of Trials"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Book of Transformation cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Rock Hurl"
		},

		cost: ["Fighting"],
		damage: 30,

		effect: {
			en: "This attack's damage isn't affected by Resistance."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card