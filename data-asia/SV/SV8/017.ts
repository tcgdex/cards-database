import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ホゲータ"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [909],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "炎袋が 小さく あふれ出た エネルギーが 頭の くぼみから 放出され ゆらゆら 揺れる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ねつでこがす"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card