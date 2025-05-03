import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テラスタルオーブ",
		id: "Terastal Orb",
		th: "ลูกแก้วเทรัสตัล",
		'zh-tw': "太晶珠",
		'zh-cn': "太晶珠"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「テラスタル」のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		id: "Pilih 1 lembar Pokémon Terastal dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		th: "เลือกการ์ดโปเกมอน [เทรัสตัล] 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		'zh-tw': "從自己的牌庫選擇1張「太晶」寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇1張「太晶」寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card