import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かつりょくのうた"
		},

		damage: 50,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "バーニングボイス"
		},

		damage: "270－",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card