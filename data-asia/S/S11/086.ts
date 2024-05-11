import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "晃晃斑"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "每一隻身上的斑點都不一樣。會用搖搖晃晃的動作 巧妙地避開對手的攻擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搖晃旋轉"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。將對手的戰鬥寶可夢【混亂】。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card