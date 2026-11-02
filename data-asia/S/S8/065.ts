import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "バルジーナ",
		'zh-tw': "禿鷹娜",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "拾った 骨で 身を 飾る。 まとう 骨の 形には 流行が あるらしい。",
		'zh-tw': "把撿來的骨頭裝飾在身上。在骨頭形狀這方面似乎也是有流行趨勢的。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ほねふうじ",
				'zh-tw': "骨之封鎖",
			},
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、手札からポケモンを出して進化できない。",
				'zh-tw': "在下個對手的回合，無法從手牌使出寶可夢將受到這個招式的寶可夢進化。",
			},
		},
		{
			name: {
				ja: "ダークカッター",
				'zh-tw': "暗黑利刃",
			},
			damage: 70,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575620,
				tcgplayer: 569566,
			},
		},
	],

	evolveFrom: {
		ja: "バルチャイ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [630],
};

export default card;
