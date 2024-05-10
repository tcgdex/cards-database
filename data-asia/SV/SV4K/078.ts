import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドゴーム",
		th: "โดกอม"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	dexId: [294],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "大声は 聴覚だけでなく 空気の 圧力となり 敵を 吹きとばし ダメージを 与える。",
		th: "เสียงร้องดังลั่นนั้นไม่ใช่แค่เสียงดังอย่างเดียว แต่ยังกลายเป็นแรงดันอากาศที่สามารถพัดคู่ต่อสู้ให้ปลิวและสร้างความเสียหายได้"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "のしかかり",
			th: "ทิ้งตัวทับ"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "メガインパクト",
			th: "เมก้าอิมแพกต์"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card