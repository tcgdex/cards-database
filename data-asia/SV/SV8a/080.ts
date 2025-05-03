import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "グラードン",
		id: "Groudon",
		th: "กราดอน",
		'zh-tw': "固拉多",
		'zh-cn': "固拉多"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	dexId: [383],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "カイオーガと 死闘の末 長い 眠りに ついた。大地の 化身と 言われる 伝説の ポケモン。",
		id: "Setelah pertarungan mematikan dengan Kyogre, Groudon tidur panjang. Pokémon legendaris yang dikenal sebagai Jelmaan Daratan.",
		th: "เข้าสู่ห้วงนิทราอันยาวนานหลังจากต่อสู้อย่างเอาเป็นเอาตายกับไคออกา เป็นโปเกมอนในตำนานที่เล่าขานกันว่าเป็นร่างแปลงของพิภพ",
		'zh-tw': "與蓋歐卡殊死戰鬥後， 便一直沉睡著。 被稱為大地化身的傳說的寶可夢。",
		'zh-cn': "與蓋歐卡殊死戰鬥後， 便一直沉睡著。 被稱為大地化身的傳說的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みなぎるちから",
			id: "Kekuatan Bergejolak",
			th: "พลังท่วมท้น",
			'zh-tw': "充溢之力",
			'zh-cn': "充溢之力"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			id: "Pilih 1 lembar Energi Dasar {Petarung} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา",
			'zh-tw': "從自己的手牌選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。",
			'zh-cn': "從自己的手牌選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグマパージ",
			id: "Magma Purge",
			th: "แม็กมาเพิร์จ",
			'zh-tw': "熔岩光芒",
			'zh-cn': "熔岩光芒"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを4枚までトラッシュし、その枚数×60ダメージ。",
			id: "Buang paling banyak 4 lembar Energi yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembarnya.",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราได้สูงสุด 4 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x60",
			'zh-tw': "將最多4張自己的場上寶可夢身上附加的能量卡丟棄，造成其張數×60點傷害。",
			'zh-cn': "將最多4張自己的場上寶可夢身上附加的能量卡丟棄，造成其張數×60點傷害。"
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