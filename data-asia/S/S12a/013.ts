import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍V",
		th: "ลิซาร์ดอนV",
		ja: "リザードンV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "燒盡",
			th: "เผาให้เป็นเถ้าถ่าน",
			ja: "やきつくす"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสท์",
			ja: "ヒートブラスト"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card