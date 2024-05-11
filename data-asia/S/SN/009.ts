import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多麗米亞",
		ja: "トリミアン"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "如果放著不管，體毛就會不斷變長，但牠只允許 信賴的人幫自己修剪。",
		ja: "放っておくと 体毛は どんどん 伸び続けるが 信頼した 者にしか カットは 許さない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尋找朋友",
			ja: "ともだちをさがす"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "毛皮攻擊",
			ja: "ファーアタック"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [676]
}

export default card