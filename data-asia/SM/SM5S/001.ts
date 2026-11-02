import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンヤンマ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "高速で 羽を 羽ばたかせると 衝撃波が 発生して まわりの 窓ガラスが 割れていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ばいそくいどう" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559955,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [193],
};

export default card;
