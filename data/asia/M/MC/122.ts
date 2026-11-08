import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウルガモス",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "炎の りんぷんを まき散らす。 危険なのは 高熱よりも あたりの 酸素が なくなること。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうけつ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "どとうのはばたき" },
			damage: 150,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863418,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メラルバ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [637],
};

export default card;
