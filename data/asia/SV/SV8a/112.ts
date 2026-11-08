import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジュラルドン",
		'id-id': "Duraludon",
		'th-th': "ดิวรัลดอน",
		'zh-tw': "鋁鋼龍",
		'zh-cn': "鋁鋼龍"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "None",
	category: "Pokemon",
	dexId: [884],
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。",
		'id-id': "Tubuh logamnya kokoh, tetapi panas cenderung menumpuk sehingga ia selalu mengeluarkan panas dari celah ekornya.",
		'th-th': "ร่างกายที่เป็นโลหะนั้นทนทานมาก แต่เก็บความร้อน มันจึงต้องระบายความร้อนออกมาทางร่องที่หาง",
		'zh-tw': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。",
		'zh-cn': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "ぶちかます",
			'id-id': "Hantaman Penuh Tenaga",
			'th-th': "ตบหนัก",
			'zh-tw': "頭突",
			'zh-cn': "頭突"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'ja-jp': "レイジングハンマー",
			'id-id': "Raging Hammer",
			'th-th': "เรจจิงแฮมเมอร์",
			'zh-tw': "激怒之錘",
			'zh-cn': "激怒之錘"
		},

		damage: "80+",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803225,
				tcgplayer: 602512,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604584,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602513,
			},
		},
	],

	retreat: 2,
	regulationMark: "H"
}

export default card