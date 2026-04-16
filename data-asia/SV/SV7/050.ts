import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角犀牛",
		'zh-cn': "獨角犀牛",
		ja: "サイホーン"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "一旦開始奔跑，即使撞上了 大岩石也不會停下來。這性情 使牠的棲息地變得越來越廣。",
		'zh-cn': "一旦開始奔跑，即使撞上了 大岩石也不會停下來。這性情 使牠的棲息地變得越來越廣。",
		ja: "走りだすと 大岩に 衝突しても 止まらない 性質のため 生息地が 広がっていったのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "角撞",
			'zh-cn': "角撞",
			ja: "つのでつく"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [111],

	thirdParty: {
		cardmarket: 779064
	}
}

export default card