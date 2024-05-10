import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイロス",
		'zh-tw': "凱羅斯"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [127],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノで 獲物を 挟みこみ そのまま まっぷたつに するか 強引に 投げ飛ばしてしまう。",
		'zh-tw': "會用角緊緊夾住獵物，就這樣把對方剪成兩半 或是把牠硬扔到天邊去。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "がむしゃらなげ",
			'zh-tw': "蠻幹上投"
		},

		damage: "90+",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card