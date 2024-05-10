import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ฮาราบารี",
		id: "Bellibolt"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		th: "เมื่อยืดและหดร่างกายที่ยืดหยุ่น สะดือไดนาโมตรงท้องจะผลิตพลังงานไฟฟ้าจำนวนมากออกมา",
		id: "Dengan memanjangkan dan memendekkan tubuhnya yang bergelambir, pusar dinamo Bellibolt menghasilkan energi listrik yang besar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "อิเล็กโทรบูลเล็ต",
			id: "Electric Bullet"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card