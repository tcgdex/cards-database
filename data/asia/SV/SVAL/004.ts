import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "骨紋巨聲鱷",
		th: "ลาวด์โบน",
		id: "Skeledirge"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		'zh-tw': "溫柔的歌聲能療癒聽者的靈魂。會使用３０００度的火焰 將敵人燒成灰燼。",
		th: "เสียงร้องเพลงที่อ่อนโยนจะช่วยเยียวยาจิตวิญญาณของผู้ฟัง เผาคู่ต่อสู้ให้เป็นจุณด้วยเปลวไฟที่ร้อน 3000 องศาเซลเซียส",
		id: "Suara nyanyian lembut Skeledirge menenangkan jiwa orang-orang yang mendengarnya. Pokémon ini membakar hangus lawannya dengan api bersuhu 3000"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "熱情歌唱",
			th: "ร้องอย่างเมามัน",
			id: "Menyanyi Bersemangat"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		damage: 50,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰嚎叫",
			th: "เบลซเชาต์",
			id: "Blaze Shout"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 190,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card