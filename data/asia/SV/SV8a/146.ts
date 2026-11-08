import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "トレジャーガジェット",
		'id-id': "Treasure Gadget",
		'th-th': "เทรเชอร์แกดเจ็ต",
		'zh-tw': "珍寶配件",
		'zh-cn': "珍寶配件"
	},

	illustrator: "inose yukie",
	rarity: "None",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から「ポケモンのどうぐ」を5枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'id-id': "Pilih paling banyak 5 lembar Pokémon Tool dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		'th-th': "เลือกการ์ด [ไอเท็มติดโปเกมอน] ได้สูงสุด 5 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		'zh-tw': "從自己的牌庫選擇最多5張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多5張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803259,
				tcgplayer: 602573,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H"
}

export default card