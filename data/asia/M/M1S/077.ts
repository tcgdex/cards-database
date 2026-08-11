import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガライボルトex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage1",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840636,
				tcgplayer: 647251,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラクライ"
	},
	attacks: [{
		name: {
			'ja-jp': "フラッシュレイ"
		},
		damage: 120,
		effect: {
			'ja-jp': "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		},
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'ja-jp': "ライオットブラスター"
		},
		damage: "200+",
		effect: {
			'ja-jp': "のぞむなら、このポケモンについているエネルギーをすべてトラッシュし、130ダメージ追加。"
		},
		cost: ["Lightning", "Lightning", "Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 0,
	regulationMark: "I",
	rarity: "Secret Rare",
	suffix: "EX",
	dexId: [310]
}

export default card
