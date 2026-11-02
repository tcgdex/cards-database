import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "精神を 集中して 放つ 波動と 呼ばれる 不思議な 波は 大岩をも 粉々に 砕く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ローキック" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ラッシュアップ" },
			damage: "60+",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "この番、手札からこのポケモンに「ポケモンのどうぐ」をつけていたなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558153,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [448],
};

export default card;
