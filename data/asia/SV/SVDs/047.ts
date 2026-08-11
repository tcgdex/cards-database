import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "จิบะคอยล์",
		'id-id': "Magnezone"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	description: {
		'th-th': "ว่ากันว่าจะบินไปทั่วท้องฟ้าพลางปล่อยคลื่นไฟฟ้าแปลก ๆ พร้อมกับรับคลื่นไฟฟ้าลึกลับไปด้วย",
		'id-id': "Dikabarkan Magnezone menerima sinyal tidak dikenal ketika terbang di langit sambil memancarkan sinyal yang mencurigakan."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'th-th': "แมกเนติกรีเจกต์",
			'id-id': "Magnet Reject"
		},

		effect: {
			'th-th': "หากต้องการ สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			'id-id': "Pemain dapat menukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "ฟ้าผ่า",
			'id-id': "Guntur"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 180,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card