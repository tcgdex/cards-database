import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスの指令（ゲーチス）",
		'zh-tw': "老大的指令",
		th: "คำสั่งของบอส (เกซิส)",
		id: "Perintah Bos (Ghetsis)"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
		id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card