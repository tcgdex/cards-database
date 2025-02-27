import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロス",
		id: "Milotic",
		th: "มิโลคารอส",
		'zh-tw': "美納斯",
		'zh-cn': "美納斯"
	},

	illustrator: "Taira Akitsu",
	rarity: "None",
	category: "Pokemon",
	dexId: [350],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "澄んだ 湖の 底に 棲む。 戦争が 起こるとき 現れ 人々の 心を いやす。",
		id: "Pokémon yang tinggal di dasar danau yang jernih. Ia akan muncul pada saat peperangan terjadi untuk menyembuhkan hati orang-orang.",
		th: "อาศัยอยู่ก้นทะเลสาบที่ใสสะอาด จะปรากฏตัวเมื่อเกิดสงครามเพื่อเยียวยาจิตใจของผู้คน",
		'zh-tw': "棲息在清澈的湖底。 在發生戰爭時出現， 治癒人們的心。",
		'zh-cn': "棲息在清澈的湖底。 在發生戰爭時出現， 治癒人們的心。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "なぎのきょうち",
			id: "Kondisi Kalem",
			th: "สภาวะสงบนิ่ง",
			'zh-tw': "平穩境地",
			'zh-cn': "平穩境地"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手の場のポケモンと、そのポケモンについているすべてのカードは、手札にもどせない。",
			id: "Selama Pokémon ini ada di Arena, Pokémon di Arena lawan dan semua kartu yang dikenakan Pokémon tersebut tidak dapat dikembalikan ke Kartu Pegangan.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนกระดานฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่กับโปเกมอนนั้น จะนำกลับขึ้นมือไม่ได้",
			'zh-tw': "只要這隻寶可夢在場上，對手的場上寶可夢與那隻寶可夢身上附加的所有卡，無法放回手牌。",
			'zh-cn': "只要這隻寶可夢在場上，對手的場上寶可夢與那隻寶可夢身上附加的所有卡，無法放回手牌。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ",
			id: "Hydro Splash",
			th: "ไฮโดรสแปลช",
			'zh-tw': "水炮濺射",
			'zh-cn': "水炮濺射"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card