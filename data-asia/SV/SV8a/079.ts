import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジーランス",
		id: "Relicanth",
		th: "จีแลนซ์",
		'zh-tw': "古空棘魚",
		'zh-cn': "古空棘魚"
	},

	illustrator: "Mina Nakai",
	rarity: "None",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。",
		id: "Relicanth bertahan mengatasi tekanan air laut dalam menggunakan sisiknya yang sekeras bebatuan dan kantong apungnya yang penuh tertimbun lemak.",
		th: "ด้วยเกล็ดที่แข็งดั่งหินผาและถุงลมที่อัดแน่นไปด้วยไขมันจึงสามารถทนทานต่อแรงดันน้ำลึกได้",
		'zh-tw': "如岩石般堅硬的鱗片 以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。",
		'zh-cn': "如岩石般堅硬的鱗片 以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きおくにもぐる",
			id: "Menyelami Ingatan",
			th: "ซุกซ่อนในความทรงจำ",
			'zh-tw': "潛入記憶",
			'zh-cn': "潛入記憶"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang telah berevolusi dapat menggunakan semua serangan yang dimiliki sebelum evolusi. [Pemain tetap membutuhkan Energi untuk menggunakan serangan tersebut.]",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราที่วิวัฒนาการแล้วทุกตัว สามารถใช้ท่าต่อสู้ที่มีก่อนวิวัฒนาการได้ทั้งหมด {จำเป็นต้องใช้พลังงานสำหรับใช้ท่าต่อสู้}",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有進化寶可夢，可使用進化前持有的所有招式。[需要有足夠使用招式的能量。]",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有進化寶可夢，可使用進化前持有的所有招式。[需要有足夠使用招式的能量。]"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ひれカッター",
			id: "Sirip Pemotong",
			th: "ครีบใบมีด",
			'zh-tw': "鰭快刀",
			'zh-cn': "鰭快刀"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card