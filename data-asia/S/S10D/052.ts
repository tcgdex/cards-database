import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ",
		'zh-tw': "伊布"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "まわりの 環境に 合わせて 体の つくりを 変えていく 能力の 持ち主。",
		'zh-tw': "伊布擁有著能夠為了適應周遭的環境而 改變身體構造的能力。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょうめいしんか",
			'zh-tw': "共鳴進化"
		},

		effect: {
			ja: "自分の番に、自分の別の「イーブイ」が手札から出したポケモンに進化したなら、1回使える。このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "在自己的回合，若自己的其他「伊布」進化成從手牌使出的寶可夢，則可使用1次。從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651020,
				tcgplayer: 569807,
				cardtrader: 234188,
			},
		},
	]
}

export default card