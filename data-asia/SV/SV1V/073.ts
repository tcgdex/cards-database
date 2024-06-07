import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴツゴツメット",
		'zh-tw': "凸凸頭盔",
		th: "หมวกนิรภัยติดหิน",
		id: "Helm Berbatu"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。",
		'zh-tw': "當附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置2個傷害指示物。",
		th: "เมื่อโปเกมอนที่ติดการ์ดนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 2 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
		id: "Saat Pokémon yang mengenakan kartu ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 2 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card