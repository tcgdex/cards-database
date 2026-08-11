import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チョロネコ",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "かわいらしい 仕草で 油断させて その すきに 持ち物を 奪う。 怒ると ツメを 立てて 反撃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おそうじ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の場のポケモンについている「ポケモンのどうぐ」を、1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557019,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [509],
};

export default card;
