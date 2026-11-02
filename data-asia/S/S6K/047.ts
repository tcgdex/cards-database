import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
		'zh-tw': "長鼻葉",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "コノハナの 吹く 草笛の 音は 聞いた ものを 不安に させる。 大木に 開いた 穴で 暮らす。",
		'zh-tw': "長鼻葉居住在大樹上的洞穴裡，牠吹奏出的草笛聲會讓聽到的人感到不安。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ねこだまし",
				'zh-tw': "擊掌奇襲",
			},
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560826,
				tcgplayer: 569275,
			},
		},
	],

	evolveFrom: {
		ja: "タネボー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [274],
};

export default card;
