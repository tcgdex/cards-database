import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダーex",
		'zh-tw': "閃電鳥ex",
		th: "ธันเดอร์ex",
		id: "Zapdos ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボルトフロート",
			'zh-tw': "伏特浮游",
			th: "โบลต์โฟลต",
			id: "Bolt Float"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【雷】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[สายฟ้า]ติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			id: "Jika Pokémon ini mengenakan Energi {Listrik}, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "いなずまれんだん",
			'zh-tw': "閃電連彈",
			th: "ฟ้าแลบต่อเนื่อง",
			id: "Kilat Bertubi-tubi"
		},

		damage: 120,

		effect: {
			ja: "ダメカンがのっている相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัวที่มีตัวนับแดเมจวางอยู่ ก็จะได้รับแดเมจ 90 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 90 kepada 1 Pokémon Cadangan lawan yang memiliki Token Kerusakan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
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
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719598
	}
}

export default card