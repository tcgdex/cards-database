import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "タマタマ"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すいとる"
		},

		damage: 10,

		effect: {
			ja: "このポケモンのHPを「10」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card