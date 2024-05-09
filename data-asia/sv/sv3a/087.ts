import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴーex"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボーナスコイン"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を1枚引く。このポケモンがバトル場にいるなら、さらに1枚引く。"
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "ゴールドラッシュ"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、その枚数×50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card