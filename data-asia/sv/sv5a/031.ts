import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズピカ",
		'zh-tw': "光蚪仔"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "体に 蓄えた 電力で 浮遊する。 雷雲のときは いつもより 高く 浮き上がるのだ。",
		'zh-tw': "會用蓄積在體內的電力 浮在空中。出現雷雲時 則能浮得比平時還要高。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキボール",
			'zh-tw': "電球"
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