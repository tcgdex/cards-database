import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ライム",
		'zh-tw': "萊姆",
		th: "ไลม์"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
		'zh-tw': "從自己的牌庫抽出3張卡。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
		th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card