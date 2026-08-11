import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズルッグ",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "皮を 首まで 引き上げて 防御の 姿勢。 ゴムのような 弾力で ダメージを 減らす。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "ずつき" }, damage: 10, cost: ["Darkness"] },
		{
			name: { ja: "せめこむ" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [559],
	thirdParty: {
		cardmarket: 829495,
		tcgplayer: 636689,
	},
};

export default card;
