import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シャワーズ",
		'id-id': "Vaporeon",
		'th-th': "ชาวเวอร์ส",
		'zh-tw': "水伊布",
		'zh-cn': "水伊布"
	},

	illustrator: "Taira Akitsu",
	rarity: "None",
	category: "Pokemon",
	dexId: [134],
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
		'id-id': "Vaporeon hidup di dekat air. Karena terdapat sirip seperti ikan pada ekornya, ada manusia yang menyangka Pokémon ini adalah putri duyung.",
		'th-th': "อาศัยอยู่ริมน้ำ เพราะหางมีครีบเหมือนปลาอยู่เลยมีคนเข้าใจผิดคิดว่าเป็นเงือก",
		'zh-tw': "雖然棲息在水邊， 但由於尾巴上有像是魚的鰭， 因此有的人會把牠誤認成人魚。",
		'zh-cn': "雖然棲息在水邊， 但由於尾巴上有像是魚的鰭， 因此有的人會把牠誤認成人魚。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "スパイラルドレイン",
			'id-id': "Spiral Drain",
			'th-th': "สไปรัลเดรน",
			'zh-tw': "螺旋吸取",
			'zh-cn': "螺旋吸取"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'zh-cn': "將這隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "とうしのうずしお",
			'id-id': "Pusaran Air Semangat Petarung",
			'th-th': "น้ำวนนักสู้",
			'zh-tw': "鬥志潮旋",
			'zh-cn': "鬥志潮旋"
		},

		damage: "90+",

		effect: {
			'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90.",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803143,
				tcgplayer: 602369,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604523,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602370,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card