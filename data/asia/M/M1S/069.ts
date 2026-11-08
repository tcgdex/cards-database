import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "インテレオン"
	},
	illustrator: "Ligton",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	description: {
		'ja-jp': "目の特殊なレンズを使って相手の体温などを感知して急所を見抜き攻撃する。"
	},
	stage: "Stage2",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840628,
				tcgplayer: 647211,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジメレオン"
	},
	attacks: [{
		name: {
			'ja-jp': "しとめる"
		},
		effect: {
			'ja-jp': "おたがいの場のポケモン（このポケモンをのぞく）の中から、残りHPが一番少ないポケモンを1匹選び、きぜつさせる。"
		},
		cost: ["Water"]
	}, {
		name: {
			'ja-jp': "ウォーターショット"
		},
		damage: 110,
		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [818]
}

export default card
