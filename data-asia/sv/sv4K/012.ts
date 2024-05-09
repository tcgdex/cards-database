import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "火山の 火口で 生活する。 １０年ごとに 背中の コブが 大噴火することで 有名だ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ほのおでこがす"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ふんせきキャノン"
		},

		damage: "120＋",

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card