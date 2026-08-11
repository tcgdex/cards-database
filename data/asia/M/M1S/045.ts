import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブーピッグ"
	},
	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	description: {
		'ja-jp': "相手を操るときの不思議なステップは昔外国で大流行したことがある。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840604,
				tcgplayer: 647285,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バネブー"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "エナジーステップ"
		},
		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札の上から4枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "ねんどうだん"
		},
		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [326]
}

export default card
