import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "切割洛托姆",
		'zh-cn': "切割洛托姆",
		ja: "カットロトム"
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "鑽進了割草機的樣子。 砍倒花草後會耀武揚威， 一副自信滿滿的樣子。",
		'zh-cn': "鑽進了割草機的樣子。 砍倒花草後會耀武揚威， 一副自信滿滿的樣子。",
		ja: "芝刈り機に 入った 姿。 花や 草を なぎ払うと 自信満々に 威張っている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "割除衝刺",
			'zh-cn': "割除衝刺",
			ja: "かりとりダッシュ"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡與「特殊能量」卡全部丟棄。",
			'zh-cn': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡與「特殊能量」卡全部丟棄。",
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」と「特殊エネルギー」を、すべてトラッシュする。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [479]
}

export default card