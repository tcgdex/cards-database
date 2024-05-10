import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ",
		'zh-tw': "一家鼠"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [925],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "寝床や エサを 食べる 場所など 用途に 合わせて いくつも 部屋が 分かれた 大きな 巣を 作る。",
		'zh-tw': "在自己所建的巨大巢穴裡，會有配合睡眠和用餐等用途 所分出的多個房間。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かじりまくる",
			'zh-tw': "狂咬"
		},

		effect: {
			ja: "自分の場の「イッカネズミ」の数ぶんのダメカンを、相手のポケモン全員に、それぞれのせる。",
			'zh-tw': "在對手的所有寶可夢身上，各放置與自己的場上「一家鼠」的數量相同數量的傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card