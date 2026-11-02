import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "プテラ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "古代の 獰猛な ポケモン。 完璧な 復元は いまの 科学でも 不可能らしい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょくげきだん" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ジェットダイブ" },
			damage: 120,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678823,
				tcgplayer: 597488,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [142],
};

export default card;
