import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミのラプラス",
	},

	illustrator: "En Morikura",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "人を 背中に乗せて 海を行く。 機嫌がいいと きれいな 鳴き声で 歌うことも あるらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いっしょにおよぐ" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札から「カスミのポケモン」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "なみのり" },
			damage: 60,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863456,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [131],
};

export default card;
