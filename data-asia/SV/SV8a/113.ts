import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブリジュラス",
		id: "Archaludon",
		th: "บริดิวรัส",
		'zh-tw': "鋁鋼橋龍",
		'zh-cn': "鋁鋼橋龍"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [1018],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "山中で 穴を 掘り エサを 探す。 落盤に 巻きこまれても へっちゃらなくらい 頑丈。",
		id: "Pokémon yang mencari makan dengan menggali lubang di dalam gunung. Ia tangguh sehingga terlibat longsor sekalipun bukanlah masalah baginya.",
		th: "ขุดรูในภูเขาเพื่อหาอาหาร มันทนทานมาก แม้จะติดอยู่ในอุโมงค์ถล่มก็ไม่สะเทือน",
		'zh-tw': "會在山裡挖洞來尋找食物。 身體非常堅硬，即使遇到 洞穴坍塌也絲毫不會在意。",
		'zh-cn': "會在山裡挖洞來尋找食物。 身體非常堅硬，即使遇到 洞穴坍塌也絲毫不會在意。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はがねのかけはし",
			id: "Jembatan Penghubung Baja",
			th: "สะพานเชื่อมเหล็กกล้า",
			'zh-tw': "鋼之橋",
			'zh-cn': "鋼之橋"
		},

		effect: {
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang mengenakan Energi {Logam} menjadi tidak membutuhkan Energi untuk Mundur.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนฝ่ายเราทุกตัวที่มีพลังงาน[โลหะ]ติดอยู่ ทั้งหมดจะหายไป",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的寶可夢【撤退】所需的能量全部消除。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "アイアンブラスター",
			id: "Iron Blaster",
			th: "ไอออนบลัสเตอร์",
			'zh-tw': "鐵之引爆",
			'zh-cn': "鐵之引爆"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card