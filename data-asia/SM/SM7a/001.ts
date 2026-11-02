import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイロス",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "角の 一撃は 大木 さえ へし折るほど。 アローラでは クワガノンが 最大の ライバル。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさんでしめる" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558889,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [127],
};

export default card;
