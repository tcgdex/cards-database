import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
		'zh-tw': "小小象",
		'zh-cn': "小小象",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "見た目より ずっと 力持ち。 振りまわす 鼻に ぶつかると 腕の 骨が もっていかれる。",
		'zh-tw': "有別於外表的大力士。 如果被牠甩動的鼻子揮中， 手臂的骨頭就會支離破碎。",
		'zh-cn': "有別於外表的大力士。 如果被牠甩動的鼻子揮中， 手臂的骨頭就會支離破碎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
				'zh-cn': "頭錘",
			},
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793498,
				tcgplayer: 587644,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [231],
};

export default card;
