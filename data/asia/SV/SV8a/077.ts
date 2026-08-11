import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノイワオ",
		'id-id': "Iron Boulder",
		'th-th': "ศิลาเหล็ก",
		'zh-tw': "鐵磐岩",
		'zh-cn': "鐵磐岩"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Pokemon",
	dexId: [1022],
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "金属質の ボディらしい。 名前は 古い 本に 記された 謎の 物体から つけられた。",
		'id-id': "Tampaknya Pokémon ini bertubuh metalik. Namanya diberikan berdasarkan objek misterius yang tercatat dalam buku kuno.",
		'th-th': "เหมือนว่าร่างกายจะมีคุณสมบัติเป็นโลหะ ถูกตั้งชื่อตามวัตถุลึกลับที่ถูกระบุไว้ในหนังสือเก่าแก่",
		'zh-tw': "身體似乎是由金屬構成。 牠的名字來自記載於 古老書籍裡的神秘物體。",
		'zh-cn': "身體似乎是由金屬構成。 牠的名字來自記載於 古老書籍裡的神秘物體。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "アジャストホーン",
			'id-id': "Adjust Horn",
			'th-th': "แอดจัสต์ฮอร์น",
			'zh-tw': "調整角擊",
			'zh-cn': "調整角擊"
		},

		damage: 170,

		effect: {
			'ja-jp': "自分の手札と相手の手札が同じ枚数でないなら、このワザは失敗。",
			'id-id': "Jika jumlah Kartu Pegangan sendiri dan jumlah Kartu Pegangan lawan tidak sama, serangan ini gagal.",
			'th-th': "ถ้าจำนวนการ์ดบนมือฝ่ายเรากับจำนวนการ์ดบนมือฝ่ายตรงข้ามไม่เท่ากัน ท่าต่อสู้นี้จะล้มเหลว",
			'zh-tw': "若自己的手牌與對手的手牌不是相同張數，則這個招式失敗。",
			'zh-cn': "若自己的手牌與對手的手牌不是相同張數，則這個招式失敗。"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803190,
				tcgplayer: 602451,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604558,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602452,
			},
		},
	],

	retreat: 3,
	regulationMark: "H"
}

export default card