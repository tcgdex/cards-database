import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テッカニン"
	},
	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		'ja-jp': "動きが速すぎて目で追えないため姿を見た瞬間から消えているように思えてしまう。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840624,
				tcgplayer: 647228,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ツチニン"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "からぬけ"
		},
		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の手札から「ヌケニン」を1枚選び、ベンチに出す。そして山札を切る。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "とんぼがえり"
		},
		damage: 90,
		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
		},
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 0,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [291]
}

export default card
