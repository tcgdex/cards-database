import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫V",
		th: "บริมออนV",
		ja: "ブリムオンV"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "占星術",
			th: "โฮโรสโคป",
			ja: "ホロスコープ"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方3張卡，從其中選擇任意數量的能量卡，附於這隻寶可夢身上。將剩餘卡以任意順序排列，放回牌庫上方。",
			th: "ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานจากในนั้นตามจำนวนที่ชอบแล้วติดที่โปเกมอนนี้ การ์ดที่เหลือ เรียงตามลำดับที่ชอบ แล้วใส่กลับไปด้านบนของสำรับการ์ด",
			ja: "自分の山札を上から3枚見て、その中からエネルギーを好きなだけ選び、このポケモンにつける。残りのカードは好きな順番に入れ替えて、山札の上にもどす。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "瞬間移動突擊",
			th: "เทเลพอร์ทเบรก",
			ja: "テレポートブレイク"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card