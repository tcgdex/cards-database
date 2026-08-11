import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルガモス",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "炎の りんぷんを まき散らす。 危険なのは 高熱よりも あたりの 酸素が なくなること。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうけつ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "どとうのはばたき" },
			damage: 150,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
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
		ja: "メラルバ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [637],
};

export default card;
