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
		name: {
			ja: "ヘイルブレード"
		},

		effect: {
			ja: "自分の場のポケモンについている{W}エネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

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
	]
}

export default card