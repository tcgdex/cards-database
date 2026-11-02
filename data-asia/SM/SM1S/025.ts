import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒドイデ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "頭に ある 毒トゲで 獲物を ズブリ。 弱ったところを １０本の 触手で 捕らえ 止めを 刺す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくばり" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561702,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [747],
};

export default card;
