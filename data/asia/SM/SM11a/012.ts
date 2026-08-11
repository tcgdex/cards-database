import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビクティニ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ビクトリーヒール" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分のベンチポケモン1匹のHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556588,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [494],
};

export default card;
