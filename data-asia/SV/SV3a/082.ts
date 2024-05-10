import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "シキミ",
		'zh-tw': "婉龍",
		th: "ชิกิมิ"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。ウラなら、自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。若為反面，則將自己的戰鬥寶可夢與備戰寶可夢互換。",
		th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ ถ้าออกก้อย สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card