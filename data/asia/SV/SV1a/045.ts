import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダグトリオ",
		'zh-tw': "三地鼠",
		'th-th': "ดักทริโอ",
		'id-id': "Dugtrio"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [51],
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "３つの 頭が 互い違いに 動くのは まわりの 土を 柔らかくして 掘りやすくするため。",
		'zh-tw': "三顆頭會輪流活動，是為了讓周圍的土 變得更鬆更好挖。",
		'th-th': "ทั้ง 3 หัวจะสลับกันเคลื่อนไหวเพื่อให้ดินรอบ ๆ นิ่มลงและขุดง่ายขึ้น",
		'id-id': "Tiga kepala Dugtrio saling bergerak ke arah yang berbeda-beda untuk melunakkan tanah di sekitarnya agar menjadi lebih mudah untuk digali."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "あなをほる",
			'zh-tw': "挖洞",
			'th-th': "ขุดรู",
			'id-id': "Menggali"
		},

		damage: 50,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701099,
				tcgplayer: 568168,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card