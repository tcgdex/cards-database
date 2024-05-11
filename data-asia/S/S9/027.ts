import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝王拿波"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "從鳥嘴延伸出的３隻角是實力的象徵。 領袖的角是最大的。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "緊急浮上"
		},

		effect: {
			'zh-tw': "在自己的回合，若這張卡在棄牌區，自己1張手牌都沒有，則可使用1次。將這張卡放置於備戰區。然後，從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card