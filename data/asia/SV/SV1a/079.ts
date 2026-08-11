import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アチゲータ"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ひをはく"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "ハイパーボイス"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701535,
				tcgplayer: 568202,
			},
		},
	],

	retreat: 3
}

export default card