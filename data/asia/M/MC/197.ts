import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "潜水が 得意な とりポケモン。 好物の みずゴケを 食べるため 水中を 泳ぎまわる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しょうか" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている[R]エネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "つばさでうつ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863493,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [580],
};

export default card;
