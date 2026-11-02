import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "鋼に 進化した ドリルは 鉄板を つらぬく 破壊力。 トンネル工事で 大活躍する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どたんばタックル" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札の残り枚数が3枚以下なら、150ダメージ追加。",
			},
		},
		{
			name: { ja: "ドリルバズーカ" },
			damage: 120,
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札を上から4枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555286,
			},
		},
	],

	evolveFrom: {
		ja: "モグリュー",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [530],
};

export default card;
