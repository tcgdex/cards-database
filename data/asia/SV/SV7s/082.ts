import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ดีแอนซี",
		id: "Diancie"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		th: "ร่างกลายพันธุ์ของเมเลซี ว่ากันว่าร่างกายที่ส่องประกายสีชมพูนั้นสวยที่สุดในโลก",
		id: "Mutasi dari Carbink. Dikatakan bahwa tubuh Diancie yang berkilau dengan warna merah muda adalah yang terindah di dunia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สะท้อนกระจาย",
			id: "Pemantulan Baur"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานพิเศษที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x40",
			id: "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap lembar Energi Spesial yang dikenakan pada semua Pokémon lawan."
		},

		damage: "40×",
		cost: ["Colorless"]
	}, {
		name: {
			th: "พาวเวอร์เจม",
			id: "Power Gem"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card