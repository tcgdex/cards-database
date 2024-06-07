import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲピー",
		'zh-tw': "波克比",
		th: "โทเกปี"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "幸運の シンボル。 殻の 中には 幸せが たくさん つまっている という。",
		'zh-tw': "好運的象徵。據說在牠的殼裡裝著滿滿的幸福。",
		th: "เป็นสัญลักษณ์นำโชค ว่ากันว่าในเปลือกของมันมีความสุขอัดอยู่เต็มเปี่ยม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "あまえごえ",
			'zh-tw': "撒嬌聲",
			th: "เสียงอ้อน"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			th: "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด หลังจากดูหน้าการ์ดนั้นแล้ว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card