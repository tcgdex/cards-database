import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ニョロモ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Kedamahadaitai Yawarakai",
	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "まだ 脚が 生えた ばかりで うまく 歩けない。 水の中を 泳いでる ほうが 好きなようだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ふむ"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しっぽビンタ"
		},

		damage: "20×",

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card
