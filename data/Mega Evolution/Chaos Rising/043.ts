import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

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

	thirdParty: {
		tcgplayer: 693550
	}
}

export default card