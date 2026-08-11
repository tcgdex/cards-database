import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤップ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭の房に ためこんだ 水は 栄養 たっぷり。 尻尾を使って その 水を 草木に かけている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561010,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [515],
};

export default card;
