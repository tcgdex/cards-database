import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ドドゲザン",
		'zh-tw': "仆斬將軍",
		th: "โดโดเกซัน"
	},

	illustrator: "Ryota Murayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [983],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "ドドゲザンに 進化できるのは 大軍勢の 頂点に 立った １匹の キリキザンだけなのだ。",
		'zh-tw': "在勢力浩大的軍團中，唯有站上頂點的那１隻劈斬司令，才能進化成仆斬將軍。",
		th: "คิริคิซันที่อยู่บนจุดสูงสุดของกองกำลังขนาดใหญ่เพียงตัวเดียวเท่านั้นที่จะสามารถวิวัฒนาการเป็นโดโดเกซันได้"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "うちとる",
			'zh-tw': "攻滅",
			th: "พิชิต"
		},

		effect: {
			ja: "相手のバトルポケモンにダメカンが4個以上のっているなら、そのポケモンをきぜつさせる。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有4個以上的傷害指示物，則將那隻寶可夢【昏厥】。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่มากกว่าหรือเท่ากับ 4 ตัว จะทำให้โปเกมอนนั้น[หมดสภาพ]"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "だいせつだん",
			'zh-tw': "大切斷",
			th: "ตัดฉับใหญ่"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card