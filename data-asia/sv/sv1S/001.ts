import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サボネア",
		'zh-tw': "刺球仙人掌"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [331],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "砂漠などの 過酷な 環境を 好む。 体内に 蓄えた 水で ３０日間 生きられる。",
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分 存活３０天。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげきばり",
			'zh-tw': "反擊針"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card