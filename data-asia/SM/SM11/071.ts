import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "乱暴な 性質だが 好物の 熟した 果物を あげると 手のひらを 返したように 懐く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ばくおんぱ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "りゅうのはどう" },
			damage: 120,
			cost: ["Psychic", "Darkness", "Colorless"],
			effect: {
				ja: "自分の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557033,
			},
		},
	],

	evolveFrom: {
		ja: "オンバット",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [715],
};

export default card;
