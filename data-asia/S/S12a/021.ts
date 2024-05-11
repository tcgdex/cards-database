import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿VSTAR",
		th: "บาอกกีVSTAR",
		ja: "バオッキーVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "火球狂燒",
			th: "ลูกไฟฟีเวอร์",
			ja: "ひのたまフィーバー"
		},

		effect: {
			'zh-tw': "若希望，將自己的牌庫上方最多5張卡丟棄。然後，增加丟棄的張數×40點傷害。",
			th: "หากต้องการ ทิ้งการ์ดได้สูงสุด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด หลังจากนั้น แดเมจจะเพิ่มตามจำนวนการ์ดที่ทิ้งบนตำแหน่งทิ้งการ์ด x40",
			ja: "のぞむなら、自分の山札を上から5枚までトラッシュする。その後、トラッシュした枚数×40ダメージ追加。"
		},

		damage: "40＋",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星餘火",
			th: "[พลังVSTAR] ดาวคุกรุ่น",
			ja: "エンバースター"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的能量卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานบนตำแหน่งทิ้งการ์ดฝ่ายเรา x30 {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			ja: "自分のトラッシュにあるエネルギーの枚数×30ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: "30×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card