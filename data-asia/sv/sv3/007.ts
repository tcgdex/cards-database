import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ボクレー",
		'zh-tw': "小木靈"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [708],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "人間の 子どもに 似た 声で 鳴いて 大人を 森の 奥へ 誘い込み 迷わせて しまうのだ。",
		'zh-tw': "用類似人類小孩的聲音鳴叫，把大人引到森林的深處，讓他們在其中迷失方向。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "えだづき",
			'zh-tw': "木枝突刺"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card