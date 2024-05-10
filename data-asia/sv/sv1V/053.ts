import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "発達した あごと キバは 岩を 噛み砕く 力強さ。 厚い 脂肪は 防御力 抜群。",
		'zh-tw': "發達的顎部和獠牙擁有能咬碎岩石的強大威力。 厚厚的脂肪使牠防禦力超群。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card