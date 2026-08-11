import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ソウブレイズex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "しんえんほむら"
		},

		damage: "30＋",

		effect: {
			'ja-jp': "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			'ja-jp': "アメジストレイジ"
		},

		damage: 280,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card