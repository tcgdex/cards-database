import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アローラ ナッシーex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			'ja-jp': "トロピカルフィーバー"
		},

		damage: 150,

		effect: {
			'ja-jp': "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。"
		}
	}, {
		cost: ["Grass", "Water", "Fighting"],

		name: {
			'ja-jp': "ブンブンスフェーン"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトル場のたねポケモンをきぜつさせる。ウラなら、相手のベンチのたねポケモンを1匹選び、きぜつさせる。"
		}
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788065,
				tcgplayer: 579474,
			},
		},
	],

	retreat: 3,
	rarity: "None"
}

export default card