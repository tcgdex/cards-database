import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "チラーミィ",
		'zh-tw': "泡沫栗鼠",
		th: "จิลามี"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	dexId: [572],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "しっぽで 汚れを 払い落す。 掃除を するときに 助かるが 潔癖症 なので 大変。",
		'zh-tw': "用尾巴來清掃灰塵。雖說能幫忙打掃是件好事， 但牠的潔癖也會讓人感到棘手。",
		th: "ใช้หางปัดสิ่งสกปรกออก ช่วยได้ตอนทำความสะอาดแต่นิสัยรักความสะอาดนั้นก็ลำบากอยู่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おそうじ",
			'zh-tw': "掃除",
			th: "ทำความสะอาด"
		},

		effect: {
			ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
			'zh-tw': "選擇最多2張對手的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
			th: "เลือก [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้ามได้สูงสุด 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card