import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "コンパン",
		'zh-tw': "毛球",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "大きな 木の下に 住んでいて 虫などを 食べているらしい。 夜は 明かりのそばに やってくる。",
		'zh-tw': "似乎住在大樹下，吃蟲子之類的東西。 夜裡會到有亮光的地方去。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667561,
				tcgplayer: 569932,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [48],
};

export default card;
