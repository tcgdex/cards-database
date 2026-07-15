import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リキキリンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "テイルアーマー" },
			effect: {
				ja: "このポケモンは、相手のたねポケモンの「ポケモンex」からワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダーティビーム" },
			damage: 160,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863788,
			},
		},
	],

	evolveFrom: {
		ja: "キリンリキ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [981],

	suffix: "EX",
};

export default card;
