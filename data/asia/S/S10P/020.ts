import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "カラナクシ",
		'zh-tw': "無殼海兔",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "エサで 姿が 変わるとも いわれるが 正しいことは まだまだ わかっていないのだ。",
		'zh-tw': "雖然也有人認為牠的樣子是因吃下的食物而變化的， 不過至今仍未得到證實。",
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
		{
			name: {
				ja: "なみのり",
				'zh-tw': "衝浪",
			},
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651079,
				tcgplayer: 569863,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [422],
};

export default card;
