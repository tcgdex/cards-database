import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "東施喵",
		ja: "ブニャット"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "為了讓自己的身體看起來 大一點來威嚇對手， 會把分叉的尾巴緊緊纏在腰上。",
		ja: "体を 大きく 見せて 相手を 威圧するため ふたまたの 尻尾で ウエストを ぎゅっと 絞っている。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泰山壓頂",
			ja: "のしかかり"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利爪揮砍",
			ja: "スラッシュクロー"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [432]
}

export default card