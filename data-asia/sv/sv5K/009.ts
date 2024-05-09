import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "クイタラン"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [631],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "しっぽの 穴から 空気を 取りこみ 炎を 燃やす。 穴を 塞がれると 具合が 悪くなる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "なめやきファイヤー"
		},

		damage: 130,

		effect: {
			ja: "コインを3回投げ、ウラの数ぶん、このポケモンについているエネルギーを選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card