import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤルキモノ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [288],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ナマケロ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "みだれひっかき"
		},

		effect: {
			ja: "コインを3回投げ、オモテ×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "いかり"
		},

		effect: {
			ja: "自分のダメージカウンター×10ダメージを追加する。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784526,
				tcgplayer: 613077,
				cardtrader: 138026,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784526,
				tcgplayer: 613077,
				cardtrader: 138026,
			},
		},
	]
}

export default card
