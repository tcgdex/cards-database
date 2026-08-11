import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パオジアンex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "わななくれいき"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'ja-jp': "ヘイルブレード"
		},

		damage: "60×",

		effect: {
			'ja-jp': "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707652,
				tcgplayer: 567842,
			},
		},
	],

	retreat: 2
}

export default card