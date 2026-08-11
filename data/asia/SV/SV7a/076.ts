import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウォーグル"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	dexId: [628],
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "仲間の ためなら どれだけ 傷つこうとも 戦いを やめない 勇敢な 大空の 戦士。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ひきずりだす"
		},

		effect: {
			'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ブラストウインド"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788049,
				tcgplayer: 579458,
			},
		},
	],

	retreat: 1,
	rarity: "None",
}

export default card