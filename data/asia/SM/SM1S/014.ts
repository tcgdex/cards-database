import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シェルダー",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "殻の 硬度は ダイヤモンドを 超える。 昔の人は カラを 集めて 盾を 造っていた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561690,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [90],
};

export default card;
