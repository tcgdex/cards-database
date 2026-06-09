import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャンデラ"
	},

	illustrator: "chibi",
	category: "Pokemon",
	dexId: [609],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "古びた 洋館に 棲みつく。 腕の 炎を 妖しく 揺らし 相手を 催眠に かけるぞ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やまあぶり"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から3枚トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 609723
	}
}

export default card