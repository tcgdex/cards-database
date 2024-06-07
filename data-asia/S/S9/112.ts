import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "アルセウスV"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "トリニティチャージ"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワーエッジ"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card