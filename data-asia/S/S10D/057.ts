import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ホシガリス",
		'zh-tw': "貪心栗鼠"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [819],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ガラルの いたるところに いる。 左右の ほっぺに 木の実を 蓄えていないと 不安。",
		'zh-tw': "在伽勒爾隨處可見。如果不往兩邊的頰囊裡 塞滿樹果，就會感到不安。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "かじる",
			'zh-tw': "咬"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651025,
				tcgplayer: 569812,
				cardtrader: 234193,
			},
		},
	]
}

export default card