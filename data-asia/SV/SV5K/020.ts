import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "モスノウ",
		'zh-tw': "雪絨蛾",
		th: "มอสโนว์",
		ko: "모스노우"
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
		th: "ใช้หนวดในการรับรู้การไหลเวียนของอากาศ เกล็ดปีกนั้นผสมผสานกับอากาศเย็นและตกลงมาราวกับหิมะ",
		ko: "더듬이로 대기의 흐름을 감지한다. 날개 가루에 냉기를 섞어서 눈처럼 내리게 한다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "いてつくれいき",
			'zh-tw': "冰冷寒氣",
			th: "ไอเย็นแช่แข็ง",
			ko: "얼어붙는냉기"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 기술을 사용할 수 없다."
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