import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブラッキー",
		id: "Umbreon",
		th: "แบล็กกี",
		'zh-tw': "月亮伊布",
		'zh-cn': "月亮伊布"
	},

	illustrator: "matazo",
	rarity: "None",
	category: "Pokemon",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "月の 波動を 体に 浴びると 輪っか模様が ほのかに 輝き 不思議な 力に 目覚めるのだ。",
		id: "Ketika tubuhnya terpapar gelombang bulan, pola cincin pada tubuh Umbreon bercahaya samar-samar, lalu kekuatan misterius akan bangkit.",
		th: "พอร่างกายได้อาบคลื่นจากดวงจันทร์ ลายวงทั่วตัวจะเรืองแสงเล็กน้อยและพลังลึกลับจะตื่นขึ้น",
		'zh-tw': "當身體沐浴了月亮波動後， 圓形花紋就會微微發光， 使神秘的力量因而覺醒。",
		'zh-cn': "當身體沐浴了月亮波動後， 圓形花紋就會微微發光， 使神秘的力量因而覺醒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "だましうち",
			id: "Serangan Tipuan",
			th: "หลอกตี",
			'zh-tw': "出奇一擊",
			'zh-cn': "出奇一擊"
		},

		effect: {
			ja: "相手のポケモン1匹に、50ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon yang menerima kerusakan.",
			th: "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนที่ได้รับแดเมจมาคิด",
			'zh-tw': "對手的1隻寶可夢受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。",
			'zh-cn': "對手的1隻寶可夢受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "しっこくのやいば",
			id: "Pisau Hitam Kelam",
			th: "ดาบทมิฬ",
			'zh-tw': "漆黑利刃",
			'zh-cn': "漆黑利刃"
		},

		damage: 140,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card