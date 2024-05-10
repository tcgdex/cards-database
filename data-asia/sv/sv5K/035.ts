import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴビット",
		'zh-tw': "泥偶小人",
		th: "โกบิท",
		'zh-cn': "泥偶小人"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [622],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "粘土から 生み出された 古代の ポケモン。 なぜか 大岩を 並べ続ける ものも いる。",
		'zh-tw': "誕生自黏土的古代寶可夢。不知為何，有一些泥偶小人 會不斷地把大石頭排列起來。",
		th: "โปเกมอนเก่าแก่ที่เกิดมาจากดินเหนียว มีตัวที่เอาแต่เรียงหินใหญ่อยู่ด้วย",
		'zh-cn': "誕生自黏土的古代寶可夢。不知為何，有一些泥偶小人 會不斷地把大石頭排列起來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "てっぺき",
			'zh-tw': "鐵壁",
			th: "กำแพงเหล็ก",
			'zh-cn': "鐵壁"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パンチ",
			'zh-tw': "出拳",
			th: "หมัด",
			'zh-cn': "出拳"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card