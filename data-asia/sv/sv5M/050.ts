import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔",
		th: "เมลเมทัล"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'zh-tw': "壽命快到盡頭的時候，身體就會生鏽解體。到最後 細小的碎片會復活為美錄坦。",
		th: "เมื่อถึงอายุขัย ร่างกายก็จะเริ่มขึ้นสนิมและพังทลายลง แต่สะเก็ดชิ้นเล็ก ๆ ของมันจะฟื้นกลับคืนเป็นเมลตันในไม่ช้า"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵之猛擊",
			th: "ไอออนแบช"
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card