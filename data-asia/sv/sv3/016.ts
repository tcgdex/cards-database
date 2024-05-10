import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "エンテイ",
		'zh-tw': "炎帝",
		th: "เอ็นเต"
	},

	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
		'zh-tw': "據說如果炎帝吼叫的話，世界上的某處火山就會爆發。",
		th: "ว่ากันว่าถ้าเอ็นเตคำราม ภูเขาไฟแห่งใดแห่งหนึ่งในโลกจะปะทุ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "プレッシャー",
			'zh-tw': "壓迫感",
			th: "กดดัน"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用的招式的傷害「-20」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ แดเมจของท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามใช้จะถูก [-20]"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ブレイズボール",
			'zh-tw': "火炎球",
			th: "เบลซบอล"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ x20"
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