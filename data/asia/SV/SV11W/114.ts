import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンチュラ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "敵に 襲われると 電気を 帯びた 糸を たくさん 吐き出して 電気の バリアを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほうでん" },
			damage: "50x",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "バチュル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [596],
	thirdParty: {
		cardmarket: 829470,
		tcgplayer: 636667,
	},
};

export default card;
