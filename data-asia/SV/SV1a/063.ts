import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デカグース",
		'zh-tw': "貓鼬探長",
		th: "เดคากูส",
		id: "Gumshoos"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [735],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物の 痕跡を 見つけると 日が 落ちるまで その場に 留まり 忍耐強く 張り込み続ける。",
		'zh-tw': "一旦發現獵物的蹤跡，就會發揮十足的耐心 蹲守在該處直到日落。",
		th: "เมื่อเจอร่องรอยของเหยื่อ จะเฝ้ารออยู่ตรงนั้นอย่างทรหดอดทนไม่ไปไหนจนกว่าตะวันจะตกดิน",
		id: "Jika menemukan jejak mangsanya, Gumshoos akan diam dan dengan sabar mengintai lokasi jejak tersebut ditemukan hingga matahari terbenam."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰",
			th: "เฮดแบงก์",
			id: "Hantaman Kepala"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎",
			th: "กัดขย้ำ",
			id: "Mengunyah"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card