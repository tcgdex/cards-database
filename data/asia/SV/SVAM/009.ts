import { Card } from "../../../interfaces"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐ex",
		th: "ลูคาริโอex",
		id: "Lucario ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "下盤踢",
			th: "เตะต่ำ",
			id: "Low Kick"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "波導彈",
			th: "กระสุนคลื่นพลัง",
			id: "Bola Aura"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 50 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 50 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card