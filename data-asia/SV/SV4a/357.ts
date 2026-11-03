import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアンex"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "わななくれいき"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「基本{W}エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ヘイルブレード"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについている{W}エネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747711,
				tcgplayer: 567754,
				cardtrader: 270349,
			},
		},
	],

	retreat: 2
}

export default card