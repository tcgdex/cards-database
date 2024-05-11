import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大劍鬼V",
		th: "ฮิซุย ไดเคนคิV",
		ja: "ヒスイ ダイケンキV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "藤箱擊落",
			th: "ทิ้งตะกร้าสาน",
			ja: "つづらおとし"
		},

		effect: {
			'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
			th: "เลือก [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้ามได้สูงสุด 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗影斬",
			th: "ชาโดว์สแลช",
			ja: "シャドースラッシュ"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card