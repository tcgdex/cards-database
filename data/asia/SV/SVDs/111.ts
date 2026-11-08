import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โบรรอน",
		'id-id': "Varoom"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'th-th': "ว่ากันว่าเกิดจากการที่โปเกมอนพิษปริศนาเข้าไปในเครื่องยนต์ที่ถูกทิ้งไว้ในโรงงานเศษเหล็ก",
		'id-id': "Dikatakan bahwa Varoom terlahir dari Pokémon racun misterius yang masuk ke dalam mesin terbengkalai di pabrik besi bekas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "จั่วการ์ดหมุนวน",
			'id-id': "Ambil Berputar"
		},

		effect: {
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card