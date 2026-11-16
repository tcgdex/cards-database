import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "キノガッサ"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [286],
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		ja: "キノココ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ずつき"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "バトルブラスト"
		},

		effect: {
			ja: "自分の{F}エネルギー×10ダメージを追加する。"
		},

		damage: "40+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784494,
				tcgplayer: 613067,
				cardtrader: 137994,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784494,
				tcgplayer: 613067,
				cardtrader: 137994,
			},
		},
	]
}

export default card
