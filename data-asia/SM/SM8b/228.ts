import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マッシブーンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジェットパンチ" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ナックルインパクト" },
			damage: 160,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "イクスパンションGX" },
			damage: "40×",
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "自分のサイドの枚数x40ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551636,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [794],

	suffix: "GX",
};

export default card;
