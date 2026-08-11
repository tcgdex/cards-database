import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドラパルトex",
		'id-id': "Dragapult ex",
		'th-th': "โดราพัลท์ex",
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
			'ja-jp': "ジェットヘッド",
			'id-id': "Jet Head",
			'th-th': "เจ็ตเฮด",
			'zh-tw': "噴射頭擊",
			'zh-cn': "噴射頭擊"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'ja-jp': "ファントムダイブ",
			'id-id': "Phantom Dive",
			'th-th': "แฟนธอมไดฟ์",
			'zh-tw': "幻影奇襲",
			'zh-cn': "幻影奇襲"
		},

		damage: 200,

		effect: {
			'ja-jp': "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
			'id-id': "Letakkan sejumlah 6 Token Kerusakan pada Pokémon Cadangan lawan sesukanya.",
			'th-th': "วางตัวนับแดเมจ 6 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			'zh-cn': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803233,
				tcgplayer: 602527,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card