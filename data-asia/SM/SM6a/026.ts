import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "とある 釣り師が １０時間の ファイトの 末に 釣り上げて 存在が 確認 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559292,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [147],
};

export default card;
