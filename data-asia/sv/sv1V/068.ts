import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ",
		'zh-tw': "摩托蜥"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [967],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "人を 乗せて 時速１２０キロで 疾走する。 人の 体温で 背中が 温まり 元気になる。",
		'zh-tw': "會以時速１２０公里載著人類飛馳，並藉著人類的 體溫來溫熱背部，恢復活力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ツーリング",
			'zh-tw': "機車旅遊"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードアタック",
			'zh-tw': "高速攻擊"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card