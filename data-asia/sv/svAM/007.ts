import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "團珠蛛",
		th: "ทามันทูล่า",
		id: "Tarountula"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "包裹著身體的線球擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。",
		th: "ก้อนเส้นใยที่พันหุ้มลำตัวมีความยืดหยุ่นที่สามารถดีดเคียวของสไตรค์ซึ่งเป็นศัตรูตามธรรมชาติกลับไปได้",
		id: "Bola benang yang melilit di tubuh Tarountula memiliki elastisitas yang dapat menangkis sabit tajam Scyther, musuh alaminya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "線帶拉扯",
			th: "ดึงด้วยใย",
			id: "Benang Penghela"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "蟲咬",
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card