import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゼルネアス"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	dexId: [716],
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "永遠の 命を 分け与えると 言われている。樹木の 姿で １０００年 眠り 復活する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "オーロラゲイン"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'ja-jp': "ギガインパクト"
		},

		damage: 130,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card