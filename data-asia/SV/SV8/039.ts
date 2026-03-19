import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼブライカ",
		'zh-tw': "雷電斑馬",
		'zh-cn': "雷電斑馬"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [523],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。",
		'zh-tw': "為了讓群體裡的斑斑馬能 透過雷電充電，只要一聽到 雷鳴聲，就會成群追趕雷雲。",
		'zh-cn': "為了讓群體裡的斑斑馬能 透過雷電充電，只要一聽到 雷鳴聲，就會成群追趕雷雲。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "キック",
			'zh-tw': "踢",
			'zh-cn': "踢"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "マッハボルト",
			'zh-tw': "音速伏特",
			'zh-cn': "音速伏特"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793473
	}
}

export default card