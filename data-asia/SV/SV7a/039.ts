import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵頭殼",
		'zh-cn': "鐵頭殼",
		ja: "テツノカシラ"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "據說牠曾射出發光的刀刃 劈開了周遭的一切，但沒有 能得知其真面目的其他資訊。",
		'zh-cn': "據說牠曾射出發光的刀刃 劈開了周遭的一切，但沒有 能得知其真面目的其他資訊。",
		ja: "光る 刃を 撃ちだし あたりの すべてを 切り裂いたらしいが ほかに 情報はなく 正体不明。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滅絕斬",
			'zh-cn': "滅絕斬",
			ja: "デリートスラッシュ"
		},

		effect: {
			'zh-tw': "若對手的備戰寶可夢的數量為3隻以上，則增加80點傷害。",
			'zh-cn': "若對手的備戰寶可夢的數量為3隻以上，則增加80點傷害。",
			ja: "相手のベンチポケモンの数が3匹以上なら、80ダメージ追加。"
		},

		damage: "40＋",
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "利刃切割",
			'zh-cn': "利刃切割",
			ja: "スライスブレード"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1023]
}

export default card