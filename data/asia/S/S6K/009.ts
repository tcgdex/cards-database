import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "コダック",
		'zh-tw': "可達鴨",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭痛が 発生している 間 脳細胞が 普段の １０倍 活動 していることが わかった。",
		'zh-tw': "據了解，當頭痛發生時，牠的腦細胞活動會比平時活躍１０倍。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずかけ",
				'zh-tw': "潑水",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560738,
				tcgplayer: 569237,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [54],
};

export default card;
