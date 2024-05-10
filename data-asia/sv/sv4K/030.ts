import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "デスマス",
		'zh-tw': "哭哭面具",
		th: "เดธมาส"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [562],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "古代人の 魂が ポケモンに なった。 自分の 顔を 知る 人を 探し 遺跡を さまよう。",
		'zh-tw': "古代人的靈魂變成了寶可夢。為了尋找認得自己長相的人 而在遺跡裡徘徊。",
		th: "จิตวิญญาณของมนุษย์สมัยโบราณกลายมาเป็นโปเกมอนนี้ มันเตร็ดเตร่อยู่ตามโบราณสถานเพื่อหาคนที่รู้จักหน้าตาของตน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ふきつなめ",
			'zh-tw': "不祥之眼",
			th: "ดวงตาแห่งลางร้าย"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを3個のせる。",
			'zh-tw': "在對手的1隻寶可夢身上放置3個傷害指示物。",
			th: "วางตัวนับแดเมจ 3 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card