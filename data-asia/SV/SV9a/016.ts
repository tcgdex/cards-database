import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのマグマラシ",
		'zh-tw': "<阿響的>火岩鼠",
		'zh-cn': "<阿響的>火岩鼠"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [156],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "戦いの前 背中を 向けて 自分の 炎が どれくらい すごいかを 相手に 見せつける。",
		'zh-tw': "戰鬥前會轉身背向對手， 向對手展示自己的火焰 有多麼厲害。",
		'zh-cn': "戰鬥前會轉身背向對手， 向對手展示自己的火焰 有多麼厲害。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "たびのきずな",
			'zh-tw': "旅途牽絆",
			'zh-cn': "旅途牽絆"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「ヒビキの冒険」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張「阿響的冒險」，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫選擇1張「阿響的冒險」，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰",
			'zh-cn': "烈焰"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card