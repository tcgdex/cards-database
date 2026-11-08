import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボスの指令（ゲーチス）",
		'zh-tw': "老大的指令",
		'th-th': "คำสั่งของบอส (เกซิส)",
		'id-id': "Perintah Bos (Ghetsis)"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
		'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701123,
				tcgplayer: 568192,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card