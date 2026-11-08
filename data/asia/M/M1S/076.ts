import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガユキノオーex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],
	stage: "MEGA",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840635,
				tcgplayer: 647248,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユキカブリ"
	},
	attacks: [{
		name: {
			'ja-jp': "アバランチハンマー"
		},
		damage: "100×",
		effect: {
			'ja-jp': "自分の山札を上から6枚トラッシュし、その中にある「基本水エネルギー」の枚数×100ダメージ。"
		},
		cost: ["Water", "Water"]
	}, {
		name: {
			'ja-jp': "フロストバリア"
		},
		damage: 200,
		effect: {
			'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},
		cost: ["Water", "Water", "Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 4,
	regulationMark: "I",
	rarity: "Secret Rare",
	suffix: "EX"
}

export default card
