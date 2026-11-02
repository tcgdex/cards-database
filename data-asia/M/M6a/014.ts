import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "パルキア",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ワームホール" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908192,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [484],
};

export default card;
