import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミッチュ",
		'zh-tw': "裹蜜蟲",
		'zh-cn': "裹蜜蟲"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1011],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "ある 地域だけで 栽培される 特別な りんごで 進化した。 ２匹で １匹の ポケモンなのだ。",
		'zh-tw': "用只會在某個地區栽培的 特別的蘋果進化而來。 是２隻等於１隻的寶可夢。",
		'zh-cn': "用只會在某個地區栽培的 特別的蘋果進化而來。 是２隻等於１隻的寶可夢。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "エネループ",
			'zh-tw': "能量閉環",
			'zh-cn': "能量閉環"
		},

		damage: 50,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、手札にもどす。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card