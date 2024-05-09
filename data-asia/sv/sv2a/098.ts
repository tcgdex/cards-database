import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "クラブ"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [98],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "危険がせまると 口から 吐きだす 泡で 全身を 包んで 体を 大きく みせようとする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しおまねき"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。"
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "クラブハンマー"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card