import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのレシラム"
	},

	illustrator: "Bun Toujo",
	rarity: "None",
	category: "Pokemon",
	dexId: [643],
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			ja: "パワーレイジ"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージ。"
		}
	}, {
		cost: ["Fire", "Fire", "Lightning", "Colorless"],

		name: {
			ja: "イノセントフレイム"
		},

		damage: 170
	}],

	retreat: 2
}

export default card