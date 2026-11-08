import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パチリス"
	},

	illustrator: "zig",
	category: "Pokemon",
	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "でんきぶくろ"
		},

		effect: {
			'ja-jp': "このポケモンはマヒにならない。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "みんなでほうでん"
		},

		damage: "10＋",

		effect: {
			'ja-jp': "自分のベンチのポケモンの数×20ダメージ追加。このワザのダメージは弱点を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693159,
				tcgplayer: 568310,
			},
		},
	],

	retreat: 1,
}

export default card