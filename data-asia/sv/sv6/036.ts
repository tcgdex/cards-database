import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマンex",
		'zh-tw': "海豚俠ex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "PLANETA Mochizuki",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マイティソウル",
			'zh-tw': "全能靈魂"
		},

		effect: {
			ja: "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。",
			'zh-tw': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ギガインパクト",
			'zh-tw': "終極衝擊"
		},

		damage: 250,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card