import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルバット",
		'zh-tw': "大嘴蝠",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "生き物の 血液が 好物。 腹ペコの 仲間に 吸った 血を 分け与えることも あるという。",
		'zh-tw': "喜歡吸食生物的血液。據說還會將吸來的血 分給空腹的夥伴。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
			},
			damage: 30,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656354,
				tcgplayer: 570705,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577119,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ズバット",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [42],
};

export default card;
