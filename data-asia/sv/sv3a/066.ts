import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "マイナン"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [312],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "仲間を 応援する 習性。 負けそうになると 体から 出す 火花の 数が どんどん 増える。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バディパルス"
		},

		effect: {
			ja: "自分の場に「プラスル」がいるなら、はたらく。このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "スピードボール"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card