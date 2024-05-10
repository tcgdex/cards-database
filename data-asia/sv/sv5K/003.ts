import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ナエトル",
		'zh-tw': "草苗龜",
		th: "นาเอเติล"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [387],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。",
		'zh-tw': "沐浴著陽光，用全身進行光合作用。 甲殼是泥土變硬後形成的。",
		th: "ทำการสังเคราะห์ด้วยแสงทั่วร่างกายเมื่อได้อาบแสงอาทิตย์ กระดองคือดินที่จับตัวเป็นก้อนแข็ง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいこうら",
			'zh-tw': "堅硬甲殼",
			th: "กระดองสุดแข็ง"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-20」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "このは",
			'zh-tw': "樹葉",
			th: "ใบไม้"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card