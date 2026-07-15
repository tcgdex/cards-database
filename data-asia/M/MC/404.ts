import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロバンコ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "まとっている 泥は 食べた 土を 反芻したもの。 長時間 日差しを 浴びても 乾かないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "どろかけ" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863706,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [749],
};

export default card;
