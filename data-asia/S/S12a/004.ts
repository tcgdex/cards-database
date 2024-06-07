import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 頑皮雷彈",
		th: "ฮิซุย มารุมายน์",
		ja: "ヒスイ マルマイン"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "體表的組織與球果的成分極為接近， 實在不可思議。當牠情緒焦躁時所放出 的電流，能量足以匹敵２０次的落雷。",
		th: "ช่างน่าแปลกใจที่เนื้อเยื่อผิวภายนอกคล้ายกับส่วนประกอบของบงงุริเหลือเกิน กระแสไฟฟ้าที่ปล่อยออกมาเวลาขุ่นเคืองนั้นพอ ๆ กับจำนวนฟ้าผ่า 20 ครั้ง",
		ja: "体表の組織 ぼんぐりの成分と 極めて 近く 不思議。 苛立ちしときに 放つ 電流は 落雷 ２０回分に 匹敵す。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重抽出",
			th: "ทริปเปิ้ลดรอว์",
			ja: "トリプルドロー"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。",
			th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			ja: "自分の山札を3枚引く。"
		}
	}, {
		name: {
			'zh-tw': "煩煩炸彈",
			th: "ระเบิดหงุดหงิด",
			ja: "イライラボム"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [101]
}

export default card