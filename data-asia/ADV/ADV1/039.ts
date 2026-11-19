import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "スバメ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [276],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "つつく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "つばさでうつ"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784523,
				tcgplayer: 613049,
				cardtrader: 138023,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784523,
				tcgplayer: 613049,
				cardtrader: 138023,
			},
		},
	]
}

export default card
