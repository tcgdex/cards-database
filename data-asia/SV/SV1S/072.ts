import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "学習装置",
		'zh-tw': "學習裝置",
		th: "อุปกรณ์ช่วยเรียนรู้",
		id: "Pembagi Pengalaman"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、そのポケモンについている基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。",
		'zh-tw': "每次當自己的戰鬥寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，可選擇1張那隻寶可夢身上附加的基本能量卡，改附於附有這張卡的寶可夢身上。",
		th: "ทุกครั้งที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรา ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ] จะเลือกการ์ดพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนนั้น 1 ใบ ย้ายไปติดกับโปเกมอนที่ติดการ์ดนี้อยู่ก็ได้",
		id: "Tiap kali Pokémon Bertarung sendiri KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pemain dapat memilih 1 lembar Energi Dasar yang dikenakan pada Pokémon tersebut, lalu memindahkannya ke Pokémon yang mengenakan kartu ini."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card