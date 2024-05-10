import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萌芽鹿",
		th: "เมบูคิจิกะ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "秋天的樣子的萌芽鹿以性情粗暴聞名。 雄性間一天到晚都在打架。",
		th: "เป็นที่รู้กันว่าเมบูคิจิกะในร่างฤดูใบไม้ร่วงมีนิสัยก้าวร้าวมาก พวกตัวผู้มักจะสู้กันเองอย่างไม่รู้จักจบสิ้น"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "四季變換",
			th: "ฤดูกาลผันผ่าน"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "怪力角擊",
			th: "เขามหากาฬ"
		},

		damage: 110,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card