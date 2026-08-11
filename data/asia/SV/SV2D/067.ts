import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "勇気のおまもり",
		'zh-tw': "勇氣護符",
		'th-th': "เครื่องรางแห่งความกล้า",
		'id-id': "Jimat Keberanian"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているたねポケモンの最大HPは「+50」される。",
		'zh-tw': "附有這張卡的【基礎】寶可夢的最大HP「+50」。",
		'th-th': "HP สูงสุดของโปเกมอน[พื้นฐาน]ที่ติดการ์ดนี้อยู่จะถูก [+50]",
		'id-id': "HP maksimal Pokémon Basic yang mengenakan kartu ini bertambah sejumlah 50."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705371,
				tcgplayer: 565929,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G"
}

export default card