import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑馬蕾冠王VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "冥界之扉"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的備戰區的【超】寶可夢身上。然後，從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨之魂"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card