import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "カラナクシ",
		'zh-tw': "無殼海兔",
		'zh-cn': "無殼海兔",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "磯辺で 見かけることが 多い。 ある程度の 時間であれば 陸上でも 活動できる。",
		'zh-tw': "經常能在岩岸發現牠的身影。 即使是在陸地上，也有辦法 活動上一定程度的時間。",
		'zh-cn': "經常能在岩岸發現牠的身影。 即使是在陸地上，也有辦法 活動上一定程度的時間。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うちみず",
				'zh-tw': "潑灑清水",
				'zh-cn': "潑灑清水",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793464,
				tcgplayer: 587610,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [422],
};

export default card;
