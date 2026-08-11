import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ",
		'zh-tw': "泥巴魚",
		'zh-cn': "泥巴魚",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "干潟が すみか。 泥に 棲む 細菌に よって 電気を つくる 器官が 発達した。",
		'zh-tw': "潮間帶便是牠的巢穴。 製造電的器官由於 泥裡的細菌而發達起來。",
		'zh-cn': "潮間帶便是牠的巢穴。 製造電的器官由於 泥裡的細菌而發達起來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "バチッとしびれる",
				'zh-tw': "劈啪麻痺",
				'zh-cn': "劈啪麻痺",
			},
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。再選擇1個那隻寶可夢身上附加的能量，將其丟棄。",
				'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。再選擇1個那隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793474,
				tcgplayer: 587620,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [618],
};

export default card;
