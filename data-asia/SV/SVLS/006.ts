import { Card } from "../../../interfaces"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズex"
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
			ja: "しんえんほむら"
		},

		damage: "30＋",

		effect: {
			ja: "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			ja: "アメジストレイジ"
		},

		damage: 280,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
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