import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大針蜂"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "大針蜂非常重視自己的地盤，為了安全起見，最好不要接近牠的住處。一旦生氣就會成群結隊襲擊而來。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神出鬼沒"
		},

		effect: {
			'zh-tw': "在自己的回合，若自己的手牌只有這1張卡，則可使用1次。將這張卡放置於備戰區。然後，從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "銳利針刺"
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
