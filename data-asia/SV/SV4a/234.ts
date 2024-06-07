import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セゴール",
		'zh-tw': "凍脊龍",
		id: "Arctibax"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [997],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "まわりの 空気を 凍らせて 氷のマスクで 顔を 守り 背びれを 氷の剣に 変える。",
		'zh-tw': "凍結周圍的空氣，以冰之面罩保護臉部， 並將背鰭變成冰劍。",
		id: "Arctibax membekukan udara di sekitarnya, menggunakan masker es untuk melindungi wajahnya, dan mengubah sirip punggungnya menjadi pedang es."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "するどいひれ",
			'zh-tw': "銳利鰭",
			id: "Sirip Tajam"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "フロストスマッシュ",
			'zh-tw': "冰霜粉碎",
			id: "Frost Smash"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card