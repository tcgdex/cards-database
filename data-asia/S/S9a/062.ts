import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜甜蜜",
		ja: "あまいミツ"
	},

	illustrator: "ORBITALLINK Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇自己的1隻寶可夢。擲硬幣直到出現反面，將那隻寶可夢恢復正面出現的次數×40點傷害相同數值的HP。",
		ja: "自分のポケモンを1匹選ぶ。ウラが出るまでコインを投げ、オモテの数×40ダメージぶん、そのポケモンのHPを回復する。"
	},

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card