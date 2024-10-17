import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ยายาโคมะ",
		id: "Fletchling"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		th: "อาศัยอยู่ตามทุ่งหญ้าป่าเขาและในเมือง ตะลุมบอนกับอิคิริงโกะเพื่อแย่งชิงอาณาเขตในเมือง",
		id: "Fletchling hidup di padang, gunung, atau di kota. Terjadi pertikaian besar di kota ketika Pokémon ini bertarung dengan Squawkabilly untuk memperebutkan wilayah teritorial."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ส่งกลับไป",
			id: "Kirim Balik"
		},

		effect: {
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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