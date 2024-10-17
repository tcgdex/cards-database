import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿羅拉 椰蛋樹ex",
		'zh-cn': "阿羅拉 椰蛋樹ex",
		ja: "アローラ ナッシーex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "熱帶狂燒",
			'zh-cn': "熱帶狂燒",
			ja: "トロピカルフィーバー"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。",
			'zh-cn': "從自己的手牌選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。",
			ja: "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。"
		},

		damage: 150,
		cost: ["Grass", "Water"]
	}, {
		name: {
			'zh-tw': "嗡嗡榍石",
			'zh-cn': "嗡嗡榍石",
			ja: "ブンブンスフェーン"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥場的【基礎】寶可夢【昏厥】。若為反面，則選擇1隻對手的備戰區的【基礎】寶可夢，將其【昏厥】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥場的【基礎】寶可夢【昏厥】。若為反面，則選擇1隻對手的備戰區的【基礎】寶可夢，將其【昏厥】。",
			ja: "コインを1回投げオモテなら、相手のバトル場のたねポケモンをきぜつさせる。ウラなら、相手のベンチのたねポケモンを1匹選び、きぜつさせる。"
		},

		cost: ["Grass", "Water", "Fighting"]
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card