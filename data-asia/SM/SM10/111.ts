import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンカラスGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "よるのしはいしゃ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札から、「ポケモンのどうぐ」「特殊エネルギー」を出してつけられず「スタジアム」も出せない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フェザーストーム" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチにいる「ポケモンGX・EX」2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "アンフェアGX" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるカードを、2枚トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557469,
			},
		},
	],

	evolveFrom: {
		ja: "ヤミカラス",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [430],

	suffix: "GX",
};

export default card;
