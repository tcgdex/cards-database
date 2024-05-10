import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガルーラex",
		'zh-tw': "袋獸ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "トリプルドロー",
			'zh-tw': "三重抽出"
		},

		effect: {
			ja: "自分の山札を3枚引く。",
			'zh-tw': "從自己的牌庫抽出3張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "マシンガンパンチ",
			'zh-tw': "機關槍拳"
		},

		damage: "100×",

		effect: {
			ja: "コインを4回投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×100點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card