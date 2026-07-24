import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ドードー",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "突然変異で 見つかった ２つの 頭を 持つ ポケモン。 時速１００キロで 走る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "にどつつき" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557428,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [84],
};

export default card;
