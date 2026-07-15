import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "炎エネルギーが 集まる 足の 肉球は 高温になり 相手に 大ダメージを 与える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864047,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [813],
};

export default card;
