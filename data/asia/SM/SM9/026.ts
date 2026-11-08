import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトデマン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "星屑が 海に 落ちて ヒトデマンに なったのだ という 民話が 各地に 残っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しびれみず" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558304,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [120],
};

export default card;
