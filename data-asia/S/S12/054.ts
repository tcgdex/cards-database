import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人",
		th: "ลูกาลูกัน",
		ja: "ルガルガン"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "生性魯莽衝動。會毫不猶豫地襲擊對手， 完全不在乎自己會受傷。",
		th: "มีนิสัยบุ่มบ่าม จะพุ่งเข้าหาคู่ต่อสู้แล้วโจมตี ถึงแม้ตัวเองจะบาดเจ็บก็ไม่ใส่ใจเลย",
		ja: "向こう見ずな 性質。 自分が 傷つくことも まるで 気にせず 相手に むかって 襲いかかる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "子夜獠牙",
			th: "มิดไนท์แฟงก์",
			ja: "ミッドナイトファング"
		},

		effect: {
			'zh-tw': "減少對手的戰鬥寶可夢身上附加的能量的數量×80點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลงตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x80",
			ja: "相手のバトルポケモンについているエネルギーの数×80ダメージぶん、このワザのダメージは小さくなる。"
		},

		damage: "240－",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [745]
}

export default card