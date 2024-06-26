import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトモシ",
		'zh-tw': "燭光靈",
		th: "ฮิโตโมชิ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Saya Tsuruta",
	dexId: [607],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。",
		'zh-tw': "點亮頭上的燭火， 假裝在指引道路。 但其實是在吸取對方的生命力。",
		th: "จุดไฟให้แสงสว่างแล้วแสร้งทำเป็นคอยนำทางให้ผู้อื่น ระหว่างนั้นก็สูบพลังชีวิตของผู้คนเหล่านั้นไปด้วย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			th: "เรียกเพื่อน"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種",
			th: "เชื้อไฟ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card