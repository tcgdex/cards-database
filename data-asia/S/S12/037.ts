import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那",
		th: "อาซานัน"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "１天只吃１個樹果。藉由忍耐飢餓來 來磨練自己的心。",
		th: "กินผลไม้แค่วันละ 1 ผล การทนต่อความหิวโหยจะช่วยขัดเกลาจิตใจให้แกร่งขึ้น"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瑜伽防守",
			th: "โยคะการ์ด"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到招式的傷害。",
			th: "โปเกมอนนี้ ตราบใดที่ยังอยู่บนเบนช์ จะไม่ได้รับแดเมจจากท่าต่อสู้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card