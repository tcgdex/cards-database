import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "アシマリ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "水の バルーンを 操る。 大きな バルーンを 作るため コツコツ 練習を 繰り返す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとすいとる" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558910,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [728],
};

export default card;
