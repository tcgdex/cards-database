import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Gholdengo",
		th: "ซาร์ฟโก"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		id: "Tubuh kukuh Gholdengo terbentuk dari koin yang disusun bertumpuk. Pokémon ini menembakkan koin secara beruntun dan mendesak musuhnya.",
		th: "ร่างกายที่เกิดจากเหรียญที่กองซ้อนกันนั้นแข็งแรง เอาชนะศัตรูด้วย การยิงเหรียญใส่อย่างต่อเนื่อง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Rich Strike",
			th: "ริชสไตรค์"
		},

		effect: {
			id: "Jika pada giliran ini, Pokémon ini berevolusi dari Gimmighoul, kerusakan yang diberikan bertambah sejumlah 90.",
			th: "เทิร์นนี้ ถ้าโปเกมอนนี้วิวัฒนาการมาจาก [คอลเลคเรย์] แล้ว การโจมตีนี้จะ เพิ่มแดเมจอีก 90"
		},

		damage: "30+",
		cost: ["Metal"]
	}, {
		name: {
			id: "Surf Return",
			th: "เซิร์ฟรีเทิร์น"
		},

		effect: {
			id: "Pemain dapat mengocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri.",
			th: "หากต้องการ นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ด ฝ่ายเราแล้วสับ"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card