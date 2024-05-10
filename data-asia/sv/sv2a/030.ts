import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドリーナ",
		'zh-tw': "尼多娜"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [30],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "群れに 危険が せまると 仲間で 結束して 超音波の 大合唱を おみまいするぞ。",
		'zh-tw': "有危險逼近群體時，會與夥伴們團結一致地 用超音波的大合唱來攻擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ファミリーコール",
			'zh-tw': "家族呼喚"
		},

		effect: {
			ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card