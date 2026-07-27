import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "尻尾で 発電所や 民家の コンセントから 電気を 吸い取り ヒゲから 電撃を 撃ち出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563491,
				tcgplayer: 605333,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [702],
};

export default card;
