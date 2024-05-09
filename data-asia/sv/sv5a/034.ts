import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "キリンリキ"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "尻尾にも 小さな 頭がある。 背後から 近づく 敵がいると 本能的に 噛みついてくる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どっちもヘッド"
		},

		damage: 30,

		effect: {
			ja: "自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card