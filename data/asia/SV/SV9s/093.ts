import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "แอร์มุโด <ของไดโกะ>",
		id: "Skarmory <Steven>"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		th: "มีร่างเหล็กที่ทนทานและดูเหมือนจะหนัก หากแต่จริง ๆ แล้วทั้งบาง และเบา สามารถบินได้ด้วยความเร็ว 300 กิโลเมตรต่อชั่วโมง",
		id: "Tubuh besinya yang tampak kukuh dan berat sebenarnya tipis dan ringan sehingga ia bisa terbang dengan kecepatan 300 km/jam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขนปีกแหลมคม",
			id: "Bulu Tajam"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ทวินโซนิค",
			id: "Twin Sonic"
		},

		effect: {
			th: "โปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์ จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 2 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "I"
}

export default card