import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麒麟奇",
		th: "คิรินริกิ"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "尾巴上也有小小顆的頭。如果有敵人從背後靠近， 就會受本能驅使一咬而上。",
		th: "ที่หางก็มีหัวเล็ก ๆ อยู่ ถ้ามีศัตรูเข้ามาใกล้จากข้างหลัง ก็จะกัดตามสัญชาตญาณ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神傷害",
			th: "ไซโคแดเมจ"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10"
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card