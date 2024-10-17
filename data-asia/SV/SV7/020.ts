import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螢光魚",
		'zh-cn': "螢光魚",
		ja: "ケイコウオ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "粉紅色的皮膚部分 會儲存太陽光發光。 聽說是用來做保護色的。",
		'zh-cn': "粉紅色的皮膚部分 會儲存太陽光發光。 聽說是用來做保護色的。",
		ja: "ピンク色の 皮の 部分は 太陽光を 溜めて 光る。 カモフラージュのためと いわれる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "潑灑清水",
			'zh-cn': "潑灑清水",
			ja: "うちみず"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [456]
}

export default card