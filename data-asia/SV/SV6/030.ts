import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロス",
		'zh-tw': "美納斯",
		th: "มิโลคารอส"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Taira Akitsu",
	dexId: [350],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "澄んだ 湖の 底に 棲む。 戦争が 起こるとき 現れ 人々の 心を いやす。",
		'zh-tw': "棲息在清澈的湖底。 在發生戰爭時出現， 治癒人們的心。",
		th: "อาศัยอยู่ก้นทะเลสาบที่ใสสะอาด จะปรากฏตัวเมื่อเกิดสงครามเพื่อเยียวยาจิตใจของผู้คน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "なぎのきょうち",
			'zh-tw': "平穩境地",
			th: "สภาวะสงบนิ่ง"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手の場のポケモンと、そのポケモンについているすべてのカードは、手札にもどせない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的場上寶可夢與那隻寶可夢身上附加的卡，全部無法放回手牌。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนกระดานฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่กับโปเกมอนนั้น จะนำกลับขึ้นมือไม่ได้"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ",
			'zh-tw': "水炮濺射",
			th: "ไฮโดรสแปลช"
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