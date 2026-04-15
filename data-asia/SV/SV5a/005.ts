import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "アリアドス",
		'zh-tw': "阿利多斯",
		th: "อาริอาโดส"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [168],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "決まった 場所に 巣を作らず あたりが 暗くなってから エサを 探し求め うろつく。",
		'zh-tw': "不會在固定的地方築巢，會在周圍都暗下來之後， 才開始四處尋找食物。",
		th: "ไม่สร้างรังในสถานที่ที่ตายตัว หลังจากที่บริเวณโดยรอบเริ่มมืด จะวนไปวนมาตามหาอาหาร"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ビッグネット",
			'zh-tw': "大網",
			th: "บิ๊กเน็ต"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトル場の進化ポケモンのにげるためのエネルギーは、1個ぶん多くなる。",
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥場的進化寶可夢【撤退】所需的能量增加1個。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนวิวัฒนาการบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะเพิ่มขึ้น 1 ลูก"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いとがらめ",
			'zh-tw': "線帶纏繞",
			th: "ชักใยพัน"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761465
	}
}

export default card