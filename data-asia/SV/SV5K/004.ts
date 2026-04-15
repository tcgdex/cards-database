import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ハヤシガメ",
		'zh-tw': "樹林龜",
		th: "ฮายาชิกาเมะ"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [388],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。",
		'zh-tw': "生活在森林中的水邊。白天會去森林的外面， 讓甲殼上的樹木曬曬太陽。",
		th: "อาศัยอยู่แถบริมน้ำกลางป่า ตอนกลางวันจะออกไปนอกป่าเพื่อให้ต้นไม้บนกระดองได้รับแสงแดด"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "こうらでぶつかる",
			'zh-tw': "甲殼衝撞",
			th: "กระดองประจัญบาน"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752746
	}
}

export default card