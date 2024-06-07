import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太古羽蟲",
		th: "อน็อปธ์",
		ja: "アノプス"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "從化石復原而來的寶可夢。曾經生活在大約１億年前的 大海，用２隻爪子捕捉獵物。",
		th: "เป็นโปเกมอนที่ฟื้นสภาพจากฟอสซิล อาศัยอยู่ในทะเลเมื่อกว่าร้อยล้านปีก่อน ใช้กรงเล็บสองข้างในการล่าเหยื่อ",
		ja: "化石から 復元した ポケモン。 １億年ほど前の 海で 暮らし ２本の ツメで 狩りをしていた。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "化石擊落",
			th: "ทิ้งฟอสซิล",
			ja: "かせきおとし"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張「謎之化石」卡，將其丟棄。這個情況下，增加120點傷害。",
			th: "หากต้องการ เลือกการ์ด [ฟอสซิลลึกลับ] 1 ใบจากบนมือฝ่ายเรา ทิ้งที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			ja: "のぞむなら、自分の手札から「なぞの化石」を1枚選び、トラッシュする。その場合、120ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [347]
}

export default card