import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ",
		'zh-tw': "晶光芽"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [969],
	hp: 40,
	types: ["Fighting"],

	description: {
		ja: "洞窟の 壁から 栄養分を 吸収。 毒の 結晶で できた 花びらを 身にまとう。",
		'zh-tw': "會從洞窟的壁上吸取養分。包覆在身上的花瓣 是用毒的結晶做成的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かくせい",
			'zh-tw': "覺醒"
		},

		effect: {
			ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card