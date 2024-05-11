import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象牙豬"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "在１萬年前的壁畫上也能見到牠的身影。曾有一段時期， 人們認為牠已經滅絕了。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "暴風雪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰山壓制"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card