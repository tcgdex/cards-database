import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪怪",
		ja: "ギギギアル"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "會從尖刺的前端發出強力電擊。紅色核心裡填充著 非常多的能量。",
		ja: "棘の 先から 強い 電撃を 発射。 赤いコアに たくさんの エネルギーを 蓄えている。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "齒輪堡壘",
			ja: "ギアウォール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有【基礎】寶可夢，受到對手的寶可夢招式的傷害「-20」點。",
			ja: "このポケモンがいるかぎり、自分のたねポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "回轉攻擊",
			ja: "ローリングアタック"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加90點傷害。",
			ja: "コインを1回投げオモテなら、90ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [601],

	thirdParty: {
		cardmarket: 605922
	}
}

export default card