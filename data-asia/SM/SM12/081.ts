import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "砂漠で 生活する。 太陽の 光を 浴びて 発電すれば エサを 食べなくても 平気なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽをふる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
		{
			name: { ja: "うしろげり" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554991,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [694],
};

export default card;
