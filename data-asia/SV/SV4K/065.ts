import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "センリ",
		'zh-tw': "千里",
		th: "เซ็นริ",
		ko: "올림박사의 기백"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。相手のバトルポケモンが「ポケモンex」なら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若對手的戰鬥寶可夢為「寶可夢【ex】」，則再抽出2張卡。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] จะจั่วการ์ดเพิ่มได้ 2 ใบ",
		ko: "자신의 「고대」의 포켓몬을 2마리까지 선택해서 트래쉬에서 기본 에너지를 1장씩 붙인다. 그 뒤, 자신의 덱을 3장 뽑는다."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card