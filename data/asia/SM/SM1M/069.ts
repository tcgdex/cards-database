import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひるがえす" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "シャドーバレット" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ナイトクライGX" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーを、2個トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561670,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [197],

	suffix: "GX",
};

export default card;
