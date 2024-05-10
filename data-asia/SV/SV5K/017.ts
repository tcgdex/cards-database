import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "サメハダー",
		'zh-tw': "巨牙鯊",
		th: "ซาเมฮาเดอร์"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [319],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "獲物の 匂いを 嗅ぎとると お尻から 海水を 噴射して 時速１２０キロで 襲撃する。",
		'zh-tw': "當牠嗅到獵物的氣味，就會從臀部噴射出海水， 發動時速１２０公里的襲擊。",
		th: "ทันทีที่ได้กลิ่นของเหยื่อก็จะฉีดน้ำทะเลออกจากหางและรีบพุ่งเข้าโจมตีด้วยความเร็ว 120 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみすてる",
			'zh-tw': "咬棄",
			th: "กัดทิ้ง"
		},

		damage: 50,

		effect: {
			ja: "コインを3回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。",
			'zh-tw': "擲3次硬幣，在不看手牌正面的情況下，選擇與正面出現的次數相同數量的對手的手牌，將其丟棄。",
			th: "ทอยเหรียญ 3 ครั้ง เลือกการ์ดจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ตามจำนวนครั้งที่ออกหัว ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊",
			th: "เจ็ตเฮด"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card