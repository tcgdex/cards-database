import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酋雷姆"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "雖然擁有凌駕於萊希拉姆和 捷克羅姆之上的力量，但是那 力量已被極低溫冷氣封住了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "‌‌[特性]反等離子"
		},

		effect: {
			'zh-tw': "若對手的棄牌區有‌名稱中有「‌阿克羅瑪」的卡，則這隻寶可夢使用「‌三重冰霜」所需的能量，改為1個【無】能量。"
		}
	}, {
		name: {
			'zh-tw': "三重冰霜"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的3隻寶可夢各受到110點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Metal", "Metal", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card