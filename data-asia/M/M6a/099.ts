import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ゾロアーク",
	},

	illustrator: "Kamome Shirahama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "白髪 振り乱し姿 死神の如く。 我が身をも 切り裂く 激しき怨讐にて 仇 襲い 道連れ覚悟で 仕留めたり。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "えんさのうず" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが「50」になるように、ダメカンをのせる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908277,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ゾロア",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [571],
};

export default card;
