import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サボネア"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [331],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "砂漠などの 過酷な 環境を 好む。 体内に 蓄えた 水で ３０日間 生きられる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげきばり"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "なぐる"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card