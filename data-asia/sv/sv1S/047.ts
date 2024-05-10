import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サダイジャ",
		'zh-tw': "沙螺蟒",
		th: "ซาไดจา",
		id: "Sandaconda"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [844],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "体を 目一杯 伸縮させ ダンプカーも 押し流すほどの 勢いで 砂を 噴射する。",
		'zh-tw': "會把身體伸長到極限後，用足以沖走大卡車的 氣勢噴射出沙子。",
		th: "ยืดและหดร่างกายอย่างสุดกำลัง เพื่อพ่นทรายด้วยความแรงที่สามารถพัดได้กระทั่งรถบรรทุก",
		id: "Sandaconda berkontraksi dan meregang semaksimal mungkin dan menyemburkan pasir yang kekuatannya dapat menggulingkan truk jungkit."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ロケットずつき",
			'zh-tw': "火箭頭錘",
			th: "พุ่งหัวจรวด",
			id: "Tandukan Kepala Roket"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			ja: "さじんふんしゃ",
			'zh-tw': "沙塵噴射",
			th: "พ่นฝุ่นทราย",
			id: "Jet Debu Pasir"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。その後、相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。然後，將對手的戰鬥寶可夢與附加的卡，全部放回對手的牌庫並重洗。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด หลังจากนั้น นำโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash. Setelah itu, kocok kembali Pokémon Bertarung lawan dan semua kartu yang dikenakannya ke Deck lawan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card