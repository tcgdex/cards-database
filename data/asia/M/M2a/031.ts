import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ソウブレイズex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しんえんほむら" },
			damage: "30+",
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "アメジストレイジ" },
			damage: 280,
			cost: ["Fire", "Psychic", "Metal"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861274,
			},
		},
	],

	evolveFrom: {
		ja: "カルボウ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [937],

	suffix: "EX",
};

export default card;
