import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハギギシリ"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [779],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "歯ぎしりで 起こる 波紋に 陽の光が 反射するとき まわりの 水は 眩いばかりに きらめく。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげき"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "かじりつく"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card