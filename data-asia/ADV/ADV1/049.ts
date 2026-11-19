import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ココドラ"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [304],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ころがる"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			ja: "にどづき"
		},

		effect: {
			ja: "コインを2回投げ、オモテ×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784533,
				tcgplayer: 613084,
				cardtrader: 138033,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784533,
				tcgplayer: 613084,
				cardtrader: 138033,
			},
		},
	]
}

export default card
