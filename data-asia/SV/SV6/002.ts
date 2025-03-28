import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "キマワリ",
		'zh-tw': "向日花怪",
		th: "คิมาวาริ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Ounishi",
	dexId: [192],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "浴びた 日差しを エネルギーに 変換するため 昼間は ずっと 太陽の方を 向いている。",
		'zh-tw': "由於會將沐浴到的陽光 轉換成能量，因此白天 總是一直面向著太陽。",
		th: "ตอนกลางวันจะหันหน้าเข้าหาดวงอาทิตย์ตลอดเวลาเพื่อเปลี่ยนแสงอาทิตย์ที่อาบมาให้เป็นพลังงาน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひざしがえし",
			'zh-tw': "光返",
			th: "แสงตะวันสะท้อนกลับ"
		},

		damage: "60×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×60ダメージ。",
			'zh-tw': "造成對手的所有寶可夢身上附加的【火】能量的數量×60點傷害。",
			th: "แดเมจจะเท่ากับจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x60"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "メガドレイン",
			'zh-tw': "超級吸取",
			th: "เมก้าเดรน"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card