import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "水辺で ボーッとしている。 なにかが 尻尾に 噛みついても まる１日 気づかない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いどにかくれる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908188,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [79],
};

export default card;
