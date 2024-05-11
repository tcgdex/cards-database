import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙河馬",
		ja: "ヒポポタス"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "體型碩大而笨重，但由於會掘開土壤藏身其中，因此難以發現其蹤跡。 情緒激動時會從鼻中噴出沙子。",
		ja: "体 大きく 鈍重なれど 土壌を掘りて 潜むゆえに 姿 捉えるは 困難なり。 気 昂りしとき 鼻より 砂を吹く。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥",
			ja: "どろかけ"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞",
			ja: "ころがりタックル"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [449]
}

export default card