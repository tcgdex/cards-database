import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シルシュルー",
		'zh-tw': "滋汁鼴",
		'zh-cn': "滋汁鼴"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [944],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "縄張りに 敵が 近づかないよう 刺激臭がする 毒液で 巣の まわりに 図形を 描く。",
		'zh-tw': "為了不讓敵人靠近地盤， 會用有刺鼻臭味的毒液， 在巢的周圍描繪圖形。",
		'zh-cn': "為了不讓敵人靠近地盤， 會用有刺鼻臭味的毒液， 在巢的周圍描繪圖形。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁",
			'zh-cn': "噴汁"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card