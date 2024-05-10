import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キングラー",
		'zh-tw': "巨鉗蟹",
		th: "คิงเกลอร์",
		id: "Kingler"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [99],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "破壊力 抜群の 大きな ハサミだが 重すぎるので 戦わないときは じゃまになる。",
		'zh-tw': "巨大的鉗子破壞力十足，但是因為太過沉重， 不戰鬥的時候就很礙事。",
		th: "มีก้ามใหญ่ที่มีพลังทำลายล้างยอดเยี่ยม แต่ว่าก้ามนี้หนักเหลือเกินก็เลยเกะกะเวลาที่ไม่ได้ใช้ต่อสู้",
		id: "Capit besar Kingler memiliki daya penghancur yang luar biasa. Tetapi, saat tidak bertarung capitnya yang berat ini hanya menjadi beban."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アームハンマー",
			'zh-tw': "臂錘",
			th: "อาร์มแฮมเมอร์",
			id: "Arm Hammer"
		},

		damage: 90,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			ja: "ハサミギロチン",
			'zh-tw': "斷頭鉗",
			th: "กรรไกรกิโยติน",
			id: "Memenggal"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card