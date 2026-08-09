import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "シズクモ",
		'zh-tw': "滴蛛",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "お尻で 水泡を 膨らませて 頭を 包む。 仲間同士で 水泡の 大きさを 比べる。",
		'zh-tw': "用臀部讓水泡膨脹，並包裹住自己的頭部。 會和同類比拼水泡的大小。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかける",
				'zh-tw': "鉤住",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667906,
				tcgplayer: 569962,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [751],
};

export default card;
