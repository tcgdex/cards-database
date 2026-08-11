import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルヤクデ"
	},
	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	description: {
		'ja-jp': "攻撃的な性質。焼けた体も危険だが大きなキバも鋭いぞ。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840559,
				tcgplayer: 647267,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤクデ"
	},
	attacks: [{
		name: {
			'ja-jp': "まきつきクラッシュ"
		},
		damage: 50,
		effect: {
			'ja-jp': "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。"
		},
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'ja-jp': "ヒートクローラー"
		},
		damage: 140,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [851]
}

export default card
