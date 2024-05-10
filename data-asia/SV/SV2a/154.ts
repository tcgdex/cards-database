import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "古びたかいの化石",
		'zh-tw': "陳舊的貝殼化石",
		th: "ฟอสซิลหอยเก่าแก่",
		id: "Fosil Kerang Usang"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。這張卡不會陷入特殊狀態，無法撤退。若在自己的回合中，則可將場上的這張卡丟棄。 [特性]貝殼潮漩 只要這隻寶可夢在戰鬥場上，對手無法從手牌使出競技場卡。",
		th: "การ์ดนี้ สามารถวางบนกระดานได้ เทียบเท่ากับโปเกมอน[พื้นฐาน]ประเภท[ไร้สี]ที่มี HP 60 การ์ดนี้ จะไม่เป็นสภาวะผิดปกติ และจะหนีไม่ได้ ถ้าอยู่ภายในเทิร์นฝ่ายเรา จะทิ้งการ์ดนี้ที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ดได้ [ความสามารถ] เกลียวคลื่นหอย ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ฝ่ายตรงข้ามจะนำการ์ดสเตเดียมจากบนมือออกมาไม่ได้",
		id: "Kartu ini dapat dimasukkan ke Arena sebagai Pokémon Basic tipe {Bening} dengan HP sejumlah 60. Kartu ini tidak akan menjadi Kondisi Khusus dan tidak dapat Mundur. Pada giliran sendiri, kartu ini yang ada di Arena dapat dibuang ke Trash. [Ability] Ombak Kerang Selama Pokémon ini ada di Arena Bertarung, lawan tidak dapat memasukkan Stadium dari Kartu Pegangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card