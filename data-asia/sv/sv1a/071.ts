import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "レッスンスタジオ",
		'zh-tw': "練習工房",
		th: "สตูดิโอฝึกซ้อม",
		id: "Studio Berlatih"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいの1進化ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
		'zh-tw': "雙方的【1階進化】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。",
		th: "แดเมจของท่าต่อสู้ที่โปเกมอน[ร่าง1] ของทั้งสองฝ่าย ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+10]",
		id: "Kerusakan akibat serangan yang digunakan oleh Pokémon Stage 1 kedua pemain kepada Pokémon Bertarung lawan bertambah sejumlah 10."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card