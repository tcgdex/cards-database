import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帝牙盧卡VSTAR",
		th: "ดีอัลกาดั้งเดิมVSTAR",
		ja: "オリジンディアルガVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "金屬爆破",
			th: "เมทัลบลาซต์",
			ja: "メタルブラスト"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×40點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ x40",
			ja: "このポケモンについているエネルギーの数×40ダメージ追加。"
		},

		damage: "40＋",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量] 星星柯羅諾斯",
			th: "[พลังVSTAR] สตาร์โครนอส",
			ja: "スタークロノス"
		},

		effect: {
			'zh-tw': "這個回合結束後，再開始1次自己的回合。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "เมื่อจบเทิร์นนี้ เริ่มเทิร์นฝ่ายเราได้อีกครั้ง {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card