import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブルex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "デュアルボルト" },
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "こうでんあつプレス" },
			damage: "180+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863533,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [466],

	suffix: "EX",
};

export default card;
