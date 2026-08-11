import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マンムーex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "None",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "マンモスキャリー"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "とどろくこうしん"
		},

		damage: "180＋",

		effect: {
			'ja-jp': "自分のベンチの2進化ポケモンの数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807703,
				tcgplayer: 614992,
			},
		},
	],

	retreat: 4,
}

export default card