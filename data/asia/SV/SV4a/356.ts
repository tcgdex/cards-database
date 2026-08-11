import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イーユイex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ねたみこがす"
		},

		effect: {
			'ja-jp': "相手の山札を上から2枚トラッシュする。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "フレイムサージ"
		},

		damage: 100,

		effect: {
			'ja-jp': "自分のベンチポケモンを3匹まで選び、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747710,
				tcgplayer: 567753,
			},
		},
	],

	retreat: 1
}

export default card