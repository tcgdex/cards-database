import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "勇気のおまもり",
		'zh-tw': "勇氣護符",
		th: "เครื่องรางแห่งความกล้า",
		id: "Jimat Keberanian"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているたねポケモンの最大HPは「+50」される。",
		'zh-tw': "附有這張卡的【基礎】寶可夢的最大HP「+50」。",
		th: "HP สูงสุดของโปเกมอน[พื้นฐาน]ที่ติดการ์ดนี้อยู่จะถูก [+50]",
		id: "HP maksimal Pokémon Basic yang mengenakan kartu ini bertambah sejumlah 50."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card