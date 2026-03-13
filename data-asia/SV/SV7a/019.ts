import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯ex",
		'zh-cn': "拉帝亞斯ex",
		ja: "ラティアスex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "無限之刃",
			'zh-cn': "無限之刃",
			ja: 'むげんのやいば'
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: '次の自分の番、このポケモンはワザが使えない。'
		},

		damage: 200,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "‌[特性]天空徑線",
			'zh-cn': "‌[特性]天空徑線",
			ja: "スカイライン"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有【基礎】寶可夢【撤退】所需的能量全部消除。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有【基礎】寶可夢【撤退】所需的能量全部消除。",
			ja: "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	thirdParty: {
		cardmarket: 787579
	}
}

export default card
