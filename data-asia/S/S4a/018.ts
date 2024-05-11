import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘋裹龍"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "啃果蟲吃了酸蘋果後進化而成。頰囊裡儲存著足以造成灼傷的強酸性液體。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "蘋果墜擊"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "酸液炸彈"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card