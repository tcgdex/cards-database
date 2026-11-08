import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カヌチャン",
		'zh-tw': "小鍛匠",
		'th-th': "คานุจัง",
		'id-id': "Tinkatink"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
		'zh-tw': "雖然會揮舞著手工打造的錘子來保護自己，但卻常被 以金屬為食的寶可夢搶走。",
		'th-th': "เหวี่ยงค้อนทำมือเพื่อป้องกันตัว แต่มักถูกโปเกมอนที่กินโลหะแย่งไป",
		'id-id': "Tinkatink mengayunkan palu buatannya untuk melindungi dirinya, namun palu tersebut sering direbut oleh Pokémon pemakan logam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "てつクズひろい",
			'zh-tw': "撿鐵屑",
			'th-th': "เก็บเศษเหล็ก",
			'id-id': "Memungut Rongsok Besi"
		},

		effect: {
			'ja-jp': "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。",
			'th-th': "เลือกการ์ดไอเท็ม 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			'id-id': "Pilih 1 lembar Item dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ようせいのかぜ",
			'zh-tw': "妖精之風",
			'th-th': "สายลมแห่งภูตพราย",
			'id-id': "Angin Peri"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705336,
				tcgplayer: 565894,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card