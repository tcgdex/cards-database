import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉",
		th: "เซราโอรา",
		ja: "ゼラオラ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用與落雷相同的速度急速接近敵人，然後用銳利的爪子把對手撕碎。",
		th: "จะเข้าประชิดศัตรูอย่างรวดเร็วด้วยความเร็วเทียบเท่าความเร็วเวลาฟ้าแลบ แล้วใช้เล็บที่แหลมคมฉีกกระชาก",
		ja: "雷が 落ちるのと 同じ 速さで 敵に 急接近。 鋭い ツメで 八つ裂きに する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "戰鬥爪",
			th: "แบตเทิลคลอว์",
			ja: "バトルクロー"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			ja: "相手のバトルポケモンが進化ポケモンなら、30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "音速伏特",
			th: "มัคโบลท์",
			ja: "マッハボルト"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [807]
}

export default card