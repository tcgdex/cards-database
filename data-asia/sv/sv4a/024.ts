import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェンex",
		'zh-tw': "古簡蝸ex",
		th: "ฉงเจี่ยนex",
		id: "Wo-Chien ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "むさぼるつた",
			'zh-tw': "追擊蔦",
			th: "ไม้เลื้อยไม่รู้จักพอ",
			id: "Sulur Pelahap"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、相手がすでにとったサイドの枚数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢受到對手已經獲得的獎賞卡的張數×60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x60 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembar Kartu Point yang telah diambil lawan kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "フォレストバーン",
			'zh-tw': "森林灼燒",
			th: "ฟอเรสต์เบิร์น",
			id: "Forest Burn"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card