import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "胖丁",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	description: {
		'zh-cn': "当它圆溜溜的大眼睛转动时就会唱起奇妙又令人惬意的歌曲，让人昏昏欲睡。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "引导" },
			effect: { 'zh-cn': "选择自己牌库中的1张支援者，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "踩踏踏" },
			effect: { 'zh-cn': "抛掷2次硬币，造成正面次数×20伤害。" },
			damage: "20×",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [39],
}

export default card
