import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ",
		'zh-tw': "鐵掌力士",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "太って 大きな ハリテヤマが 強いとは 限らない。 小柄でも 身軽で 技に 長けたものもいる。",
		'zh-tw': "體型壯碩的鐵掌力士未必就很強。 也有體型雖小，但身輕如燕 且技巧高超的鐵掌力士存在。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つきおとし",
				'zh-tw': "轉倒",
			},
			damage: 40,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				ja: "マッスルはりて",
				'zh-tw': "筋肉巴掌",
			},
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
				'zh-tw': "這個招式的傷害不計算抵抗力。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651094,
				tcgplayer: 569878,
			},
		},
	],

	evolveFrom: {
		ja: "マクノシタ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [297],
};

export default card;
