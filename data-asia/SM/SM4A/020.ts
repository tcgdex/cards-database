import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーピッグ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "黒真珠で サイコパワーを 強め 奇妙な ステップで 相手の 心を 操るぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マイペース" },
			effect: {
				ja: "このポケモンはこんらんにならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "じこあんじ" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「じこあんじ」のダメージは「+60」される。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560266,
			},
		},
	],

	evolveFrom: {
		ja: "バネブー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [326],
};

export default card;
