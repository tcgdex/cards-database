import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "リザード",
		'zh-tw': "火恐龍",
		th: "ลิซาร์โดะ"
	},

	illustrator: "Ryota Murayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。",
		'zh-tw': "如果牠在戰鬥中亢奮起來，就會噴出灼熱的火焰，把周圍的東西燒得一乾二淨。",
		th: "เมื่อตื่นเต้นจากการต่อสู้จะพ่นเปลวเพลิงร้อนแรงแผดเผารอบข้าง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "ヒートタックル",
			'zh-tw': "熱力衝撞",
			th: "ฮีทแท็กเกิล"
		},

		damage: 70,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723931
	}
}

export default card