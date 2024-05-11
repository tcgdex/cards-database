import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾斯",
		th: "เรจิไอซ์",
		ja: "レジアイス"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "能操控降至零下２００度的寒氣，將靠近牠的東西 都在一瞬間就冰封起來。",
		th: "ควบคุมไอเย็นที่เย็นยะเยือกถึงขนาดติดลบ 200 องศา แช่แข็งทุกสิ่งที่เข้าใกล้ในพริบตา",
		ja: "マイナス２００度まで 冷えこむ 冷気を 操り 近づいたものを あっという間に 氷漬けにする。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雷吉之門",
			th: "เรจิเกต",
			ja: "レジゲート"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴雪制約",
			th: "บลิซาร์ดไบนด์",
			ja: "ブリザードバインド"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】」，無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม [โปเกมอน【V】] ที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ไม่ได้",
			ja: "次の相手の番、このワザを受けた「ポケモンV」は、ワザが使えない。"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [378]
}

export default card