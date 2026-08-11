import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴツゴツメット",
		'zh-tw': "凸凸頭盔",
		'th-th': "หมวกนิรภัยติดหิน",
		'id-id': "Helm Berbatu"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。",
		'zh-tw': "當附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置2個傷害指示物。",
		'th-th': "เมื่อโปเกมอนที่ติดการ์ดนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 2 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
		'id-id': "Saat Pokémon yang mengenakan kartu ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 2 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693148,
				tcgplayer: 568299,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G"
}

export default card