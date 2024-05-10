import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "サワロ",
		'zh-tw': "薩瓦羅",
		th: "ซากัวโร",
		id: "Saguro"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンを2匹まで選び、HPをそれぞれ「50」回復する。",
		'zh-tw': "選擇最多2隻自己的寶可夢，各恢復「50」HP。",
		th: "เลือกโปเกมอนฝ่ายเราได้สูงสุด 2 ตัว ฟื้นฟู HP แต่ละตัวตัวละ [50]",
		id: "Pilih paling banyak 2 Pokémon sendiri, lalu pulihkan HP masing-masing sejumlah 50."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card