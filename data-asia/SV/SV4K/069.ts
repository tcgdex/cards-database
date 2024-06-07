import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ",
		th: "โคโซคูมูชิ"
	},

	illustrator: "Oku",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "群れで かたまり つねに まわりを 警戒している。 敵の 気配を 感じると 散り散りに 逃げ出す。",
		th: "รวมกันเป็นฝูงคอยระแวดระวังรอบข้างอยู่ตลอด ถ้ารู้สึกถึงวี่แววของศัตรูก็จะหนีกระจัดกระจายกันไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こっそりたべる",
			th: "แอบกิน"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			th: "กระแทก"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card