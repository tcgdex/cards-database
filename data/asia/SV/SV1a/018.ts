import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホゲータ",
		'zh-tw': "呆火鱷",
		'th-th': "โฮเกเตอร์",
		'id-id': "Fuecoco"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [909],
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。",
		'zh-tw': "會躺在溫熱的岩石上，用四角形的鱗片所吸收的 熱能來製造火之能量。",
		'th-th': "นอนเกลือกกลิ้งอยู่บนหินอุ่น สร้างพลังงานไฟด้วยความร้อนที่ดูดซับเข้ามาด้วยเกล็ดสี่เหลี่ยม",
		'id-id': "Fuecoco berbaring di atas batu hangat dan menciptakan energi api dengan menyerap energi panas tersebut menggunakan sisik perseginya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ぼーっとする",
			'zh-tw': "發呆",
			'th-th': "เหม่อลอย",
			'id-id': "Melamun"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、このポケモンのHPを「30」回復する。",
			'zh-tw': "擲1次硬幣若為正面，則將這隻寶可夢恢復「30」HP。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "ほのお",
			'zh-tw': "火焰",
			'th-th': "ไฟ",
			'id-id': "Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701072,
				tcgplayer: 568141,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card