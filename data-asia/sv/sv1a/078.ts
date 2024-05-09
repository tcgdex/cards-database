import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホゲータ"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [909],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぼーっとする"
		},

		effect: {
			ja: "コインを1回投げオモテなら、このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card