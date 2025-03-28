import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เครเซเลีย"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		th: "เวลาบินจะปล่อยอนุภาคที่ส่องแสงจากปีกที่เหมือนผ้าคลุม ถูกเรียกว่าเป็นร่างแปลงของพระจันทร์เสี้ยว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ร่ายรำบำบัด"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]"
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "เครสเซนต์เพิร์จ"
		},

		effect: {
			th: "หากต้องการ เลือกการ์ดรางวัลที่คว่ำอยู่ของฝ่ายเรา 1 ใบ หงายหน้าการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 80 (หงายการ์ดรางวัลนั้นไว้ จนกว่าจะจบการแบตเทิล)"
		},

		damage: "80+",
		cost: ["Psychic", "Psychic", "Psychic"]
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
	regulationMark: "H"
}

export default card