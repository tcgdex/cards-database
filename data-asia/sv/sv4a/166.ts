import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガチガチバンド",
		'zh-tw': "硬硬束帶",
		th: "สายรัดแข็งเป๊ก",
		id: "Gelang Kaku[Pokémon Tool]"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている1進化ポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
		'zh-tw': "附有這張卡的【1階進化】寶可夢，受到對手的寶可夢招式的傷害「-30」點。",
		th: "แดเมจของท่าต่อสู้ที่โปเกมอน[ร่าง1] ที่ติดการ์ดนี้อยู่ จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30]",
		id: "Kerusakan akibat serangan dari Pokémon lawan yang diterima Pokémon Stage 1 yang mengenakan kartu ini berkurang sejumlah 30."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card