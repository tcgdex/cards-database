import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マッギョ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "皮膚が 硬いので 相撲取りに 踏まれても 平気。 電気を 流すとき 笑い顔に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ヘッドボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560205,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [618],
};

export default card;
