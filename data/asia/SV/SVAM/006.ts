import { Card } from "../../../interfaces"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魔幻假面喵",
		th: "มาสเคอเนีย",
		id: "Meowscarada"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		'zh-tw': "看似浮在空中的花，是牠利用斗蓬內側的毛的反射 將莖隱藏後呈現出的假象。",
		th: "ภาพสะท้อนของขนที่ด้านหลังเสื้อคลุมอำพรางกิ่งก้านทำให้ดอกไม้ดูเหมือนลอยอยู่",
		id: "Bunga yang terlihat melayang adalah kamuflase tangkai bunga oleh pantulan bulu di balik jubah Meowscarada."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "戲法斗篷",
			th: "ผ้าคลุมแสนกล",
			id: "Trick Mantle"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม",
			id: "Pemain dapat memilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu mengembalikannya ke Kartu Pegangan lawan."
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鮮花炸彈",
			th: "ฟลาวเวอร์บอมบ์",
			id: "Flower Bomb"
		},

		damage: 130,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card