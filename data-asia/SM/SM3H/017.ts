import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "うかつに 触ろうとすると 体中に 生える トゲに 刺されて 気絶することもある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ウォーターアロー" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561081,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [117],
};

export default card;
