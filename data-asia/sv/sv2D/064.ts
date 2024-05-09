import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [925],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "寝床や エサを 食べる 場所など 用途に 合わせて いくつも 部屋が 分かれた 大きな 巣を 作る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かじりまくる"
		},

		effect: {
			ja: "自分の場の「イッカネズミ」の数ぶんのダメカンを、相手のポケモン全員に、それぞれのせる。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card