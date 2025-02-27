import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドラパルトex",
		id: "Dragapult ex",
		th: "โดราพัลท์ex",
		'zh-tw': "多龍巴魯托ex",
		'zh-cn': "多龍巴魯托ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド",
			id: "Jet Head",
			th: "เจ็ตเฮด",
			'zh-tw': "噴射頭擊",
			'zh-cn': "噴射頭擊"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "ファントムダイブ",
			id: "Phantom Dive",
			th: "แฟนธอมไดฟ์",
			'zh-tw': "幻影奇襲",
			'zh-cn': "幻影奇襲"
		},

		damage: 200,

		effect: {
			ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
			id: "Letakkan sejumlah 6 Token Kerusakan pada Pokémon Cadangan lawan sesukanya.",
			th: "วางตัวนับแดเมจ 6 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			'zh-cn': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card