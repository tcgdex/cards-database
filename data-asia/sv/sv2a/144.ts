import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フリーザー",
		'zh-tw': "急凍鳥",
		th: "ฟรีเซอร์",
		id: "Articuno"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [144],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。",
		'zh-tw': "擁有能自在操縱冰的能力。據說是棲息在 永凍之地的雪山中。",
		th: "มีพลังในการควบคุมน้ำแข็งได้ดั่งใจนึก ว่ากันว่ามันอาศัยอยู่บนภูเขาหิมะที่เยือกแข็งตลอดปี",
		id: "Articuno memiliki kekuatan untuk mengendalikan es sesukanya. Dikatakan bahwa Pokémon ini tinggal di gunung bersalju dengan ibun abadi."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アイスフロート",
			'zh-tw': "冰之浮游",
			th: "ไอซ์โฟลต",
			id: "Ice Float"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【水】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[น้ำ]ติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			id: "Jika Pokémon ini mengenakan Energi {Air}, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "ふぶき",
			'zh-tw': "暴風雪",
			th: "พายุหิมะ",
			id: "Badai Salju"
		},

		damage: 110,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ก็จะได้รับแดเมจตัวละ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card