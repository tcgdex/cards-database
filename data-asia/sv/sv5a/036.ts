import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "フラベベ",
		'zh-tw': "花蓓蓓"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [669],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "赤い花に 乗った フラベベ。 生まれると すぐに お気に入りの 花を 探すために 飛びまわる。",
		'zh-tw': "乘著紅花的花蓓蓓。 從出生那刻開始就會為了 尋找喜歡的花而四處飛行。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きずをなおす",
			'zh-tw': "療傷"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "ようせいのかぜ",
			'zh-tw': "妖精之風"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card