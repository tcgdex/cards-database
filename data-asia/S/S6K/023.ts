import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
		'zh-tw': "電飛鼠",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電気を まき散らしながら 飛ぶので とりポケモンたちが 近付かない。 おかげで エサを ひとりじめできる。",
		'zh-tw': "會一邊到處放電一邊飛行，所以鳥寶可夢們不會靠近牠，這讓牠可以獨佔食物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "電擊",
			},
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560772,
				tcgplayer: 569251,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [587],
};

export default card;
