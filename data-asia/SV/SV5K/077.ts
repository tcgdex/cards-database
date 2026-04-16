import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ジーランス",
		'zh-tw': "古空棘魚",
		th: "จีแลนซ์"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。",
		'zh-tw': "如岩石般堅硬的鱗片以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。",
		th: "ด้วยเกล็ดที่แข็งดั่งหินผาและถุงลมที่อัดแน่นไปด้วยไขมันจึงสามารถทนทานต่อแรงดันน้ำลึกได้"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きおくにもぐる",
			'zh-tw': "潛入記憶",
			th: "ซุกซ่อนในความทรงจำ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有進化寶可夢，可使用進化前持有的所有招式。[需要有足夠使用招式的能量。]",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราที่วิวัฒนาการแล้วทุกตัว สามารถใช้ท่าต่อสู้ที่มีก่อนวิวัฒนาการได้ทั้งหมด {จำเป็นต้องใช้พลังงานสำหรับใช้ท่าต่อสู้}"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ひれカッター",
			'zh-tw': "鰭快刀",
			th: "ครีบใบมีด"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752799
	}
}

export default card