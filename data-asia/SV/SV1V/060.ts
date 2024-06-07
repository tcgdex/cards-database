import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハピナス",
		'zh-tw': "幸福蛋",
		th: "แฮปปีนาส",
		id: "Blissey"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [242],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "ハピナスの 産む タマゴには 幸せが つまっていて ひとくち 食べると だれでも 笑顔になれる。",
		'zh-tw': "幸福蛋生的蛋裡富含幸福，只要吃上一口， 不管是誰都會笑逐顏開。",
		th: "ไข่ของแฮปปีนาสมีความสุขอัดแน่นอยู่ แค่ได้กินเพียงคำเดียวไม่ว่าใครก็ยิ้มได้",
		id: "Telur yang dikeluarkan Blissey mengandung kebahagiaan dan siapa pun yang memakannya walau untuk satu gigit akan tersenyum."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "せわやきナース",
			'zh-tw': "悉心護士",
			th: "พยาบาลช่างปรนนิบัติ",
			id: "Perawat Suka Merawat"
		},

		effect: {
			ja: "自分の番に1回使える。自分のバトルポケモンの特殊状態を、すべて回復する。",
			'zh-tw': "在自己的回合時可使用1次。將自己的戰鬥寶可夢的特殊狀態全部恢復。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา รักษาสภาวะผิดปกติทั้งหมดของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pulihkan semua Kondisi Khusus yang dialami Pokémon Bertarung sendiri."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハッピーサイクロン",
			'zh-tw': "幸福旋風",
			th: "แฮปปี้ไซโคลน",
			id: "Happy Cyclone"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。",
			th: "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			id: "Pindahkan semua Energi yang dikenakan pada Pokémon ini ke 1 Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card