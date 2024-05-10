import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "グルーシャ",
		'zh-tw': "古魯夏",
		th: "กรูชา",
		id: "Grusha"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモンにエネルギーが1枚もついていないなら、7枚になるように引く。",
		'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。若自己的場上寶可夢身上1張能量卡都沒有附加，則抽卡直到滿7張為止。",
		th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ ถ้าโปเกมอนบนกระดานฝ่ายเราไม่มีการ์ดพลังงานติดอยู่เลยแม้แต่ 1 ใบ ให้จั่วจนได้การ์ด 7 ใบ",
		id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar. Jika Pokémon di Arena sendiri tidak mengenakan Energi 1 lembar pun, ambil kartu hingga jumlah Kartu Pegangan sendiri menjadi 7 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card