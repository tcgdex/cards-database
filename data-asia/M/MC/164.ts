import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじりつく" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863460,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [158],
};

export default card;
