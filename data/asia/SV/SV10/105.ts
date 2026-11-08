import { Card } from "models/database/card";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のマタドガス",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'ja-jp': "体内に 含まれる 毒ガスを ぎりぎりまで 薄めると 最高級の 香水ができる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いっせいばくはつ" },
			damage: "40×",
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "おたがいの場の、名前に「ドガース」または「マタドガス」とつくポケモンの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821937,
				tcgplayer: 629046,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロケット団のドガース",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [110],
};

export default card;
