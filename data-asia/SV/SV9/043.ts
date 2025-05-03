import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのキュワワー",
		'zh-tw': "莉莉艾的花療環環",
		'zh-cn': "莉莉艾的花療環環"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [764],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ツルを 使って 花を 摘みとる。 体に つけた 花からは 癒しの 効果が 現れる。",
		'zh-tw': "會用藤蔓來摘花。 黏在身上的花會 產生療癒的效果。",
		'zh-cn': "會用藤蔓來摘花。 黏在身上的花會 產生療癒的效果。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はなまねき",
			'zh-tw': "招花",
			'zh-cn': "招花"
		},

		effect: {
			ja: "自分の山札からたねポケモンの「リーリエのポケモン」を好きなだけ選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇任意數量的【基礎】寶可夢的「莉莉艾的寶可夢」，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇任意數量的【基礎】寶可夢的「莉莉艾的寶可夢」，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "ぱっときえる",
			'zh-tw': "憑空消失",
			'zh-cn': "憑空消失"
		},

		damage: 30,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。",
			'zh-cn': "將這隻寶可夢與附加的卡，全部放回手牌。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card