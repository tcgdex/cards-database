import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詭角鹿",
		ja: "アヤシシ"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "製造肉眼不可見的障壁時，黑珠會發出妖異的光輝。從牠身上脫落的鬍鬚 是用來製作溫暖冬衣的實用原料。",
		ja: "目に見えぬ 壁を 作りしとき 黒き珠 妖しく 輝きたり。 抜け落ちし 髭は 暖かく 冬衣の 原料に 重宝す。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "快走",
			ja: "いそぎあし"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫抽出1張卡。",
			ja: "自分の番に1回使える。自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "神通力",
			ja: "じんつうりき"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。",
			ja: "自分の手札と相手の手札が同じ枚数なら、80ダメージ追加。"
		},

		damage: "40＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [899]
}

export default card