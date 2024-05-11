import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "在晴朗的日子會混在雲朵中，自在地在空中來回飛行。會用美妙的高音歌唱。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勸誘曲調"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張支援者卡，給對手看過。重洗剩餘牌庫，將所選的卡放回牌庫上方。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滑翔"
		},

		damage: 60,
		cost: ["Water", "Metal"]
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card