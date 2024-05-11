import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳海參"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "覆蓋著皮膚的黏液具有出眾的保濕效果，即使在陸地上待好幾天也不會乾掉。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "拳海參上投"
		},

		effect: {
			'zh-tw': "若手牌有這張卡，則在自己的回合時可使用1次。將這張卡放回牌庫下方。然後，從自己的牌庫抽出1張卡。在這個回合，若已經使出了其他的「拳海參上投」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "拳骨"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card