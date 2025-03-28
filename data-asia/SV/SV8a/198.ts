import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "メロコ",
		id: "Mela",
		'zh-tw': "梅洛可",
		'zh-cn': "梅洛可"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\n自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、自分の手札が6枚になるように、山札を引く。",
		id: "Kartu ini dapat digunakan jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO. Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon sendiri. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar.",
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 從自己的棄牌區選擇1張「基本【火】能量」卡，附於自己的寶可夢身上。然後，從牌庫抽卡直到自己的手牌滿6張為止。",
		'zh-cn': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 從自己的棄牌區選擇1張「基本【火】能量」卡，附於自己的寶可夢身上。然後，從牌庫抽卡直到自己的手牌滿6張為止。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card