import { Card } from "models/database/card"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢捕捉器",
		'th-th': "โปเกมอนแคชเชอร์",
		'id-id': "Pokémon Catcher"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card