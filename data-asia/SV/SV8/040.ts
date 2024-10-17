import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "マッギョ"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [618],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "干潟が すみか。 泥に 棲む 細菌に よって 電気を つくる 器官が 発達した。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "バチッとしびれる"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card