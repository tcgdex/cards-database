import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのウツドン",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とかす" },
			damage: 30,
			cost: ["Grass"],
		},
		{
			name: { ja: "はっぱサイクロン" },
			damage: 70,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863294,
			},
		},
	],

	evolveFrom: {
		ja: "エリカのマダツボミ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [70],
};

export default card;
