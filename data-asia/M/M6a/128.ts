import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーex",
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 230,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フォトンバレット" },
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の「ポケモンex」全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "サイキックフォース" },
			damage: 230,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908306,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [150],

	suffix: "EX",
};

export default card;
