import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電雲"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "一邊在空中飛來飛去，一邊四處打雷引發森林大火， 因此受到厭惡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "輔助電光"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【雷】能量卡，附於備戰寶可夢身上。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "打雷"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card