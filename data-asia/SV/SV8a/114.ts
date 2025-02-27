import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン",
		id: "Varoom",
		th: "โบรรอน",
		'zh-tw': "噗隆隆",
		'zh-cn': "噗隆隆"
	},

	illustrator: "HAGIYA Kaoru",
	rarity: "None",
	category: "Pokemon",
	dexId: [965],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鋼の 体が 本体。 岩に 張りつき その成分を エネルギーに 変えて 活動する。",
		id: "Tubuh baja Varoom adalah tubuh aslinya. Pokémon ini menempel di batu, mengubah kandungan batu tersebut menjadi energinya, lalu beraktivitas.",
		th: "ร่างที่แท้จริงคือส่วนที่เป็นเหล็กกล้า เกาะติดอยู่กับหินแล้วเปลี่ยนส่วนประกอบนั้นให้เป็นพลังงานที่ใช้ในการขับเคลื่อน",
		'zh-tw': "鋼鐵身軀才是本體。 會貼在岩石上將其成分 轉換成活動用的能量。",
		'zh-cn': "鋼鐵身軀才是本體。 會貼在岩石上將其成分 轉換成活動用的能量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "こうちょく",
			id: "Kaku",
			th: "แข็งเกร็ง",
			'zh-tw': "硬化",
			'zh-cn': "硬化"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "とびだしヘッド",
			id: "Sundulan Meloncat",
			th: "กระโดดโหม่ง",
			'zh-tw': "魯莽頭擊",
			'zh-cn': "魯莽頭擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card