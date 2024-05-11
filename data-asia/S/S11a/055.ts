import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鳳王V"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "復活火焰"
		},

		effect: {
			'zh-tw': "若這張卡在棄牌區，則在自己的回合時可使用1次，若使用，則自己的回合結束。將這張卡放置於備戰區。然後，從自己的棄牌區選擇最多4張基本能量卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "彩虹烈焰"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的基本能量的屬性種類的數量×30點傷害。"
		},

		damage: "100+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card