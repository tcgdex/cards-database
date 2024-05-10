import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘",
		th: "พิคาชู",
		id: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。",
		th: "ที่แก้มทั้งสองข้างมีถุงสำหรับเก็บไฟฟ้า พอโกรธจะปล่อยไฟฟ้าที่เก็บเอาไว้ออกมาในรวดเดียว",
		id: "Pikachu memiliki kantong penampung listrik di kedua pipinya. Ketika marah, Pokémon ini mengeluarkan seluruh listrik yang telah terkumpul."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "じゅうでん",
			'zh-tw': "充電",
			th: "ชาร์จ",
			id: "Charge"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Energi Dasar {Listrik} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ピカパンチ",
			'zh-tw': "皮卡拳",
			th: "พิคาพันช์",
			id: "Pika Punch"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card