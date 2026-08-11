import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イーブイ"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "かくせい"
		},

		effect: {
			'ja-jp': "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "でんこうせっか"
		},

		damage: "20＋",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761538,
				tcgplayer: 566133,
			},
		},
	],

	retreat: 1,
}

export default card