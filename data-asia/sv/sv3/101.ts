import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "パトロールキャップ",
		'zh-tw': "巡邏帽子"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンがバトル場にいるかぎり、自分の山札は、相手のワザ・特性・グッズ・ポケモンのどうぐ・サポートによる、山札をトラッシュするカードの効果を受けない。",
		'zh-tw': "只要附有這張卡的寶可夢在戰鬥場上，自己的牌庫不會受到對手的招式・特性・物品卡・寶可夢道具卡・支援者卡的卡牌效果影響而丟棄牌庫。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card