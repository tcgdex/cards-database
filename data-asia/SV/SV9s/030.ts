import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ฟรีเซอร์",
		id: "Articuno"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		th: "มีพลังในการควบคุมน้ำแข็งได้ดั่งใจนึก ว่ากันว่ามันอาศัยอยู่บนภูเขา หิมะที่เยือกแข็งตลอดปี",
		id: "Articuno memiliki kekuatan untuk mengendalikan es sesukanya. Dikatakan bahwa Pokémon ini tinggal di pegunungan salju abadi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สยายปีกเย็น",
			id: "Kepakan Dingin"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ไอซ์บลาสต์",
			id: "Ice Blast"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
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