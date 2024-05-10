import { Card } from "../../../interfaces"
import Set from "../svAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "保母曼波",
		th: "มามันโบ",
		id: "Alomomola"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會用魚鰭溫柔地抱住受傷或是虛弱的寶可夢， 並用特殊的黏膜加以治療。",
		th: "ประคองโปเกมอนที่อ่อนแอหรือบาดเจ็บด้วยครีบอย่างอ่อนโยน แล้วใช้เยื่อเมือกพิเศษช่วยรักษา",
		id: "Sambil memeluk lembut Pokémon yang melemah atau terluka dengan siripnya, Alomomola menyembuhkan mereka menggunakan membran khususnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝浪",
			th: "โต้คลื่น",
			id: "Berselancar"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "水流斬",
			th: "อควาสแลช",
			id: "Aqua Slash"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card