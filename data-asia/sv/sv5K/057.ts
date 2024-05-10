import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ノココッチ",
		'zh-tw': "土龍節節",
		th: "โนโกก็อจจิ"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [982],
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。",
		'zh-tw': "會用堅硬的尾巴挖穿地下深處的岩盤來築巢。 巢穴可以長達１０公里。",
		th: "ขุดพื้นหินที่อยู่ลึกลงไปในดินด้วยหางสุดแข็งแล้วทำรัง โพรงมีความยาวกว่า 10 กิโลเมตร"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にげあしドロー",
			'zh-tw': "逃跑抽出",
			th: "จั่วแล้ววิ่งหนี"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を3枚引く。その後、このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫抽出3張卡。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดแล้วสับ"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			th: "แลนด์ครัช"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card