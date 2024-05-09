import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "パチリス"
	},

	illustrator: "zig",
	category: "Pokemon",
	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきぶくろ"
		},

		effect: {
			ja: "このポケモンはマヒにならない。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "みんなでほうでん"
		},

		damage: "10＋",

		effect: {
			ja: "自分のベンチのポケモンの数×20ダメージ追加。このワザのダメージは弱点を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card