import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノコウベ",
		th: "คอเหล็ก"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [993],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "古い 書物に 記された テツノコウベという 物体は このポケモンかも しれない。",
		th: "วัตถุที่เรียกว่าคอเหล็กที่ระบุในบันทึกเก่าแก่อาจเป็นโปเกมอนตัวนี้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ホーミングヘッド",
			th: "โฮมมิงเฮด"
		},

		effect: {
			ja: "ダメカンがのっている相手のポケモン3匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			th: "โปเกมอนฝ่ายตรงข้าม 3 ตัวที่มีตัวนับแดเมจวางอยู่ จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バリオンビーム",
			th: "แบรีออนบีม"
		},

		damage: 150,

		effect: {
			ja: "このワザは、このポケモンに「ブーストエナジー 未来」がついているなら、エネルギー3個で使える。",
			th: "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้มี [บูสต์เอนเนอร์จี้ อนาคต] ติดอยู่ สามารถใช้ได้ด้วยพลังงาน[ไร้สี] 3 ลูก"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card