import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三地鼠",
		th: "ดักทริโอ"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "三胞胎的地鼠，擁有能夠挖掘到地下１００公里深的潛力。沒人知道牠在地下的部分究竟長成什麼樣子。",
		th: "ดิกดาแฝดสามที่ซ่อนพลังอยู่ ขุดลงไปใต้ดินลึกถึง 100 กิโลเมตร ไม่มีใครรู้ว่าใต้ดินเป็นอย่างไร"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重頭擊",
			th: "ทริปเปิลเฮด"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×60點傷害。若全部為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60 ถ้าออกหัวทั้งหมด ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์จากท่าต่อสู้"
		},

		damage: "60×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card