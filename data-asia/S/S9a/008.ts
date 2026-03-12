import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三蜜蜂",
		ja: "ミツハニー"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "３隻一直都在一起，但每一隻對花蜜的 喜好卻略有不同。",
		ja: "いつも 一緒の ３匹だけど それぞれの 花の 蜜の 好みは 微妙に 違う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蜜之搬運",
			ja: "みつはこび"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "蟲咬",
			ja: "むしくい"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [415],

	thirdParty: {
		cardmarket: 609717
	}
}

export default card