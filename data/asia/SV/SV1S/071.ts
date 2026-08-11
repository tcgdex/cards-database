import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "岩のむねあて",
		'zh-tw': "岩石胸甲",
		'th-th': "เกราะหุ้มหน้าอกหิน",
		'id-id': "Pelindung Dada Bebatuan"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
		'zh-tw': "附有這張卡的【鬥】寶可夢，受到對手的寶可夢招式的傷害「-30」點。",
		'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอน[ต่อสู้]ที่ติดการ์ดนี้อยู่ จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30]",
		'id-id': "Kerusakan akibat serangan dari Pokémon lawan yang diterima Pokémon {Petarung} yang mengenakan kartu ini berkurang sejumlah 30."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693038,
				tcgplayer: 567188,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G"
}

export default card