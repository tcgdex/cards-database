import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ",
		'zh-tw': "噴火駝",
		th: "บาคูดา",
		id: "Camerupt"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "火山の 火口で 生活する。 １０年ごとに 背中の コブが 大噴火することで 有名だ。",
		'zh-tw': "平時生活在火山口。以背上的駝峰每１０年 會大爆發一次而聞名。",
		th: "อาศัยอยู่บริเวณปากปล่องภูเขาไฟ ขึ้นชื่อเรื่องภูเขาไฟที่หนอกบนกลางหลังระเบิดครั้งใหญ่ทุก 10 ปี",
		id: "Camerupt hidup di kawah gunung berapi. Punuk di punggungnya terkenal mengeluarkan erupsi besar setiap 10 tahun sekali."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ふんか",
			'zh-tw': "噴火",
			th: "ระเบิดปะทุ",
			id: "Erupsi"
		},

		damage: "50+",

		effect: {
			ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×100ダメージ追加。",
			'zh-tw': "將雙方的牌庫上方各1張卡丟棄，增加其中能量卡的張數×100點傷害。",
			th: "ทิ้งการ์ดจากด้านบนของสำรับการ์ดของทั้งสองฝ่ายฝ่ายละ 1 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดพลังงานที่อยู่ในนั้น x100",
			id: "Buang kartu masing-masing 1 lembar dari atas Deck kedua pemain ke Trash, kerusakan yang diberikan bertambah sejumlah 100 untuk tiap lembar Energi yang ada di antaranya."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ばくねつスタンプ",
			'zh-tw': "爆熱踩踏",
			th: "ตราประทับระเบิดร้อน",
			id: "Entakan Ledakan Panas"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card