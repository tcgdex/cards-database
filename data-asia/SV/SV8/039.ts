import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼブライカ"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [523],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "キック"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "マッハボルト"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card