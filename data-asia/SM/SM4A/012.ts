import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒンバス",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "汚い 水でも ぜんぜん 平気な タフな ポケモン。 でも ボロボロで みすぼらしいので 人気は ない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねてかわす" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560257,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [349],
};

export default card;
