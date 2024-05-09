import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソルex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "みらいよち"
		},

		effect: {
			ja: "自分または相手の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カースドスラッグ"
		},

		damage: "100＋",

		effect: {
			ja: "相手の手札が3枚以下なら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card