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
		en: "Watchog"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [505],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Unannounced Check"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip 3 coins. If any are heads, look at your opponent's hand and choose as many cards as the number of heads. Your opponent shuffles those cards into their deck."
		}
	}, {
		name: {
			en: "Low Kick"
		},

		cost: ["Colorless"],
		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693560,
		cardmarket: 886489
	}
}

export default card