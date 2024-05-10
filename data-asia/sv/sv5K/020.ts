import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "モスノウ",
		'zh-tw': "雪絨蛾",
		th: "มอสโนว์"
	},

	illustrator: "rika",
	rarity: "Common",
	category: "Pokemon",
	dexId: [873],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "触角で 大気の 流れを 察知する。 りんぷんに 冷気を 織り交ぜ 雪のように 降らせる。",
		'zh-tw': "觸角能用來察覺大氣的流動。會如同降雪般地 灑下混進了寒氣的鱗粉。",
		th: "ใช้หนวดในการรับรู้การไหลเวียนของอากาศ เกล็ดปีกนั้นผสมผสานกับอากาศเย็นและตกลงมาราวกับหิมะ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "いてつくれいき",
			'zh-tw': "冰冷寒氣",
			th: "ไอเย็นแช่แข็ง"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card