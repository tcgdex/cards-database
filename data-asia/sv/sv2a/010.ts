import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キャタピー",
		'zh-tw': "綠毛蟲"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [10],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "脚は 短いが 吸盤に なっているので 坂でも 壁でも くたびれることなく 進んでいく。",
		'zh-tw': "別看牠的腳很短，因為是吸盤，所以無論是 斜坡還是牆壁都能輕鬆前進。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はっぱをたべる",
			'zh-tw': "吃葉子"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【草】寶可夢，則增加30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card