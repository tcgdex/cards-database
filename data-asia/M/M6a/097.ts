import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア",
	},

	illustrator: "Kazuki Minami",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "深い 海溝の 底で 眠る。 ルギアが 羽ばたくと ４０日 嵐が 続くと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレメンタルブラスト" },
			damage: 250,
			cost: ["Fire", "Water", "Lightning"],
			effect: {
				ja: "このポケモンについている[R][W][L]エネルギーを1個ずつ選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908275,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [249],
};

export default card;
