import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フリージオ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "氷で できた 鎖を 使い 相手を 締め上げると そのまま 一気に 凍らせてしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コールサイン" },
			cost: ["Water"],
			effect: {
				'ja-jp': "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 30,
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863498,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [615],
};

export default card;
