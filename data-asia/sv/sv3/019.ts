import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クイタラン",
		'zh-tw': "熔蟻獸",
		th: "คุยทาแรน"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [631],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎を ベロの ように 使う。 アイアントの 硬い 外骨格を じわじわと 溶かし いただくのだ。",
		'zh-tw': "將火焰當成舌頭來使用。會一點一點地熔化鐵蟻堅硬的外骨骼，然後把牠吃掉。",
		th: "ใช้เปลวไฟเหมือนกับเป็นลิ้น ค่อย ๆ ละลายโครงกระดูกส่วนนอกแข็ง ๆ ของไอแอนท์แล้วสวาปาม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "エナジーバーナー",
			'zh-tw': "能量燃燒",
			th: "เอนเนอร์จี้เบิร์นเนอร์"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card