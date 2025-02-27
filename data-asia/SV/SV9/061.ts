import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのゾロアークex",
		'zh-tw': "N的索羅亞克ex",
		'zh-cn': "N的索羅亞克ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とりひき",
			'zh-tw': "交易",
			'zh-cn': "交易"
		},

		effect: {
			ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。",
			'zh-tw': "在自己的回合，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。",
			'zh-cn': "在自己的回合，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ナイトジョーカー",
			'zh-tw': "暗黑底牌",
			'zh-cn': "暗黑底牌"
		},

		effect: {
			ja: "自分のベンチの「Nのポケモン」が持つワザを1つ選び、このワザとして使う。",
			'zh-tw': "選擇1個自己的備戰區的「N的寶可夢」持有的招式，作為這個招式使用。",
			'zh-cn': "選擇1個自己的備戰區的「N的寶可夢」持有的招式，作為這個招式使用。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card