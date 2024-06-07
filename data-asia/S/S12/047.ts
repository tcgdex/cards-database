import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天秤偶",
		th: "ยาจิลอน",
		ja: "ヤジロン"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		'zh-tw': "用單腳一邊旋轉一邊移動。有時候也能看到 顛倒過來旋轉的天秤偶。",
		th: "เคลื่อนไหวโดยหมุนเท้าข้างเดียว ยาจิลอนที่กลับหัวแล้วหมุนก็มี",
		ja: "一本足で 回転しながら 移動する。 逆さまに なって 回転する ヤジロンも 見かける。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尋找朋友",
			th: "หาพรรคพวก",
			ja: "ともだちをさがす"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "巴掌",
			th: "ตบ",
			ja: "ビンタ"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [343]
}

export default card