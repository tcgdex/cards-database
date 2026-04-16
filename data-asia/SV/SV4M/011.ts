import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バオッキー",
		'zh-tw': "爆香猿",
		th: "บาอกกี"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [514],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "興奮すると 頭や 尻尾から 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。",
		'zh-tw': "興奮的時候，頭部與尾巴就會變熱並飛出火花。不知為何最喜歡吃甜的。",
		th: "เมื่อตื่นตัว ผงไฟจากหัวและหางจะฟุ้งออกมาจนร้อนขึ้น แต่ไม่รู้ว่าทำไมของโปรดถึงเป็นของหวาน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ",
			'zh-tw': "三猴行",
			th: "มังกีทริโอ"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「花椰猿」「爆香猿」「冷水猿」，則這隻寶可夢使用招式所需的【無】能量全部消除。",
			th: "ถ้าบนกระดานฝ่ายเรามี [ยานักกี] [บาอกกี] [ฮิยักกี] อยู่ พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้ ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートタックル",
			'zh-tw': "熱力衝撞",
			th: "ฮีทแท็กเกิล"
		},

		damage: 190,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741838
	}
}

export default card