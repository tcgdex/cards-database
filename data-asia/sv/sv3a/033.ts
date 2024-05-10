import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴース",
		'zh-tw': "鬼斯",
		th: "โกส"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
		'zh-tw': "會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素， 使對手變得虛弱。",
		th: "ใช้ร่างกายที่เป็นแก๊สเกาะติดเหยื่อแล้วค่อย ๆ ส่งพิษผ่านเข้าผิวหนังไปทีละนิดจนเหยื่ออ่อนแอลง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひきつける",
			'zh-tw': "吸引",
			th: "ยั่วยวน"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "おにび",
			'zh-tw': "鬼火",
			th: "ลูกไฟวิญญาณ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card