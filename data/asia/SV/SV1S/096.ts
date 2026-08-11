import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パフュートンex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きょうらんのかおり"
		},

		damage: "10＋",

		effect: {
			'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ヘビースタンプ"
		},

		damage: 210,

		effect: {
			'ja-jp': "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。"
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
				cardmarket: 693062,
				tcgplayer: 567213,
			},
		},
	],

	retreat: 2
}

export default card