import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "頬の 毒袋を 鳴らして 敵を 威嚇。 ひるんだ 隙に 毒突きを おみまいする。",
		'zh-tw': "會從自己臉頰上的毒囊發出聲音來威嚇對手， 趁對手畏懼的時候使出毒擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どつく",
				'zh-tw': "推擊",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656366,
				tcgplayer: 570711,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577123,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [453],
};

export default card;
