import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マッギョ"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [618],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "体の 黄色い 模様から 強い 電気を 放つとき なぜか すこし 微笑んでいる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カスタムトラップ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、このポケモンに「ポケモンのどうぐ」がついているなら、ワザを使ったポケモンにダメカンを5個のせる。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "じひびき"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card