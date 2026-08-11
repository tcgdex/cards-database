import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "竹蘭的霸氣",
		th: "ความทะเยอทะยานของชิโรนะ",
		id: "Aspirasi Cynthia"
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。在上個對手的回合，若自己的寶可夢【昏厥】了，則抽卡直到滿8張為止。",
		th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ให้จั่วจนได้การ์ด 8 ใบ",
		id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar. Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO, ambil kartu hingga jumlah Kartu Pegangan sendiri menjadi 8 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card