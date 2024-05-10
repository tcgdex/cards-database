import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンex",
		'zh-tw': "噴火龍ex",
		th: "ลิซาร์ดอนex",
		id: "Charizard ex"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ブレイブウイング",
			'zh-tw': "無畏之翼",
			th: "เบรฟวิง",
			id: "Brave Wing"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			id: "Jika Pokémon ini memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			ja: "ばくえんのうず",
			'zh-tw': "爆焰旋渦",
			th: "วงล้อระเบิดไฟ",
			id: "Pusaran Ledakan Api"
		},

		damage: 330,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card