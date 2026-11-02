import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナップ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "元気の ない ポケモンに 頭の 葉っぱを 分け与える。 疲れを 取る 効果が あるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるのムチ" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561069,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [511],
};

export default card;
