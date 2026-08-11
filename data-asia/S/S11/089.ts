import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "バッフロン",
		'zh-tw': "爆炸頭水牛",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。",
		'zh-tw': "只用頭錘就能壓扁汽車。頭部的那團毛越大一團， 在群體裡的地位就會越高。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ロストヘッド",
				'zh-tw': "放逐頭擊",
			},
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、ロストゾーンに置く。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放置於放逐區。",
			},
		},
		{
			name: {
				ja: "かいりきホーン",
				'zh-tw': "怪力角擊",
			},
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667964,
				tcgplayer: 570020,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [626],
};

export default card;
