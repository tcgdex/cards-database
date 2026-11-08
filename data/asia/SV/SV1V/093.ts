import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジバコイルex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "エナジークラッシュ"
		},

		damage: "50×",

		effect: {
			'ja-jp': "相手のポケモン全員についているエネルギーの数×50ダメージ。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'ja-jp': "パルスランチャー"
		},

		damage: 220,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。"
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
				cardmarket: 693168,
				tcgplayer: 568319,
			},
		},
	],

	retreat: 3,
}

export default card