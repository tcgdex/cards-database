import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "カブルモ",
		'zh-tw': "蓋蓋蟲",
		'zh-cn': "蓋蓋蟲"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [588],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "口から 吐き出す 液体で チョボマキの 殻を 溶かす。 中身 だけを いただくのだ。",
		'zh-tw': "用嘴裡吐出的液體 來融化小嘴蝸的殼， 只會去吃裡面的身體。",
		'zh-cn': "用嘴裡吐出的液體 來融化小嘴蝸的殼， 只會去吃裡面的身體。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきとばす",
			'zh-tw': "推倒",
			'zh-cn': "推倒"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'zh-cn': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card