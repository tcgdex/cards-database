import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斧螳螂",
		ja: "バサギリ"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "用堅硬的岩石守護己身，以粗獷的斧頭砍倒大樹。性情暴躁易怒。要是 在荒野遇見牠，逃跑將是唯一選擇。",
		ja: "硬き岩で 身を守り 無骨な 斧は 大木を 切り倒す。 気性 荒々しく 荒地にて 遭遇しときは 逃げの一手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大樹斬",
			ja: "たいぼくぎり"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【氣絕】。",
			ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暴亂衝撞",
			ja: "あばれタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			ja: "このポケモンにも30ダメージ。"
		},

		damage: 120,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [900]
}

export default card