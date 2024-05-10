import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウex",
		'zh-tw': "夢幻ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "リスタート",
			'zh-tw': "重啟"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。",
			'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ゲノムハック",
			'zh-tw': "基因駭入"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card