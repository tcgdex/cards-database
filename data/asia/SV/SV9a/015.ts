import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのヒノアラシ",
		'zh-tw': "<阿響的>火球鼠",
		'zh-cn': "<阿響的>火球鼠"
	},

	illustrator: "Susumu Maeya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [155],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "いつもは 背中を まるめている。 怒ったとき 驚いたとき 背中から 炎が 吹き出す。",
		'zh-tw': "總是蜷起背把身體縮成一團。 生氣或受到驚嚇的時候， 背上就會噴出火焰。",
		'zh-cn': "總是蜷起背把身體縮成一團。 生氣或受到驚嚇的時候， 背上就會噴出火焰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひのこ",
			'zh-tw': "火花",
			'zh-cn': "火花"
		},

		damage: 30,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card