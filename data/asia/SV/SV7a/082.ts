import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "モトトカゲex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ブレイクスルー"
		},

		damage: 130,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Grass", "Fire", "Psychic"],

		name: {
			'ja-jp': "ジルコンロード"
		},

		damage: 180,

		effect: {
			'ja-jp': "のぞむなら、自分の山札を5枚引く。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788055,
				tcgplayer: 579464,
			},
		},
	],

	retreat: 1,
	rarity: "None",
}

export default card