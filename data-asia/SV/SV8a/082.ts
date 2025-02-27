import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガバイト",
		id: "Gabite",
		th: "กาไบต์",
		'zh-tw': "尖牙陸鯊",
		'zh-cn': "尖牙陸鯊"
	},

	illustrator: "Nisota Niso",
	rarity: "None",
	category: "Pokemon",
	dexId: [444],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "まれに 脱皮し ウロコが 剥げる。 その成分が 含まれる 薬は 疲れた 体を ギンギンにする。",
		id: "Terkadang Gabite berganti kulit dan sisiknya terkelupas. Kandungan dalam sisik Pokémon ini dijadikan obat yang berkhasiat membuat tubuh lelah menjadi segar bugar.",
		th: "นาน ๆ ทีจะลอกคราบทำให้เกล็ดหลุดออกมา เกล็ดนั้นมีส่วนประกอบที่ถ้าเอาไปผสมยาจะช่วยให้ร่างกายที่อ่อนล้ากระปรี้กระเปร่าขึ้น",
		'zh-tw': "偶爾脫皮，鱗片會脫落。 含有其成分的藥可以 讓疲勞的身體活力四射。",
		'zh-cn': "偶爾脫皮，鱗片會脫落。 含有其成分的藥可以 讓疲勞的身體活力四射。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "パワーブラスト",
			id: "Power Blast",
			th: "พาวเวอร์บลาสต์",
			'zh-tw': "力量爆破",
			'zh-cn': "力量爆破"
		},

		damage: 50,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
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