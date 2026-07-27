import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "とある 釣り師が １０時間の ファイトの 末に 釣り上げて 存在が 確認 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まきつく" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559291,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [147],
};

export default card;
