import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "喇叭芽",
		th: "มาดาซึโบมิ"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "因為花苞長得像人臉，所以私底下有些人說牠是傳說生物曼德拉草的一種。",
		th: "มีเสียงซุบซิบกันว่า จากดอกตูมที่ดูราวกับใบหน้าคนนั้น อาจจะเป็นพันธุ์หนึ่งของแมนเดรกในตำนานหรือไม่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒液衝擊",
			th: "เวนอมช็อค"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加40點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 40"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card