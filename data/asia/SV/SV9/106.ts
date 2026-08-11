import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウリムー"
	},

	illustrator: "Nakamura Ippan",
	rarity: "None",
	category: "Pokemon",
	dexId: [220],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "鼻先で 地面を 掘って 食べるものを 探しだす。 凍った 地面も へっちゃらだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なかまをよぶ"
		},

		effect: {
			'ja-jp': "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Fighting"],

		name: {
			'ja-jp': "つきたおし"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807693,
				tcgplayer: 614982,
			},
		},
	],

	retreat: 2,
}

export default card