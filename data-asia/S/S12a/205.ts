import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘",
		ja: "ピカチュウ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。",
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "皮卡衝刺",
			ja: "ピカダッシュ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢【撤退】所需的能量全部消除。",
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "胡思亂撞",
			ja: "きまぐれタックル"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [25],

	thirdParty: {
		cardmarket: 687767
	}
}

export default card