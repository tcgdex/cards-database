import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡帕V",
		ja: "フーパV"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "雙面",
			ja: "ダブルフェイス"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，改為【超】與【惡】2種屬性。",
			ja: "このポケモンは、場にいるかぎりとの2つのタイプになる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗影衝擊",
			ja: "シャドーインパクト"
		},

		effect: {
			'zh-tw': "在自己的1隻寶可夢身上放置3個傷害指示物。",
			ja: "自分のポケモン1匹に、ダメカンを3個のせる。"
		},

		damage: 170,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card