import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "タケルライコex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はじけるほうこう"
		},

		effect: {
			ja: "自分の手札をすべてトラッシュし、山札を6枚引く。"
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			ja: "きょくらいごう"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。"
		}
	}],

	retreat: 3
}

export default card