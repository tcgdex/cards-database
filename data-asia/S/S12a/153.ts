import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "竹蘭的霸氣",
		th: "ความทะเยอทะยานของชิโรนะ",
		ja: "シロナの覇気"
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。在上個對手的回合，若自己的寶可夢【氣絕】了，則抽卡直到滿8張為止。",
		th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ให้จั่วจนได้การ์ด 8 ใบ",
		ja: "自分の手札が5枚になるように、山札を引く。前の相手の番に、自分のポケモンがきぜつしていたなら、8枚になるように引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card