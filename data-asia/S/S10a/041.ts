import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "口から 出す 超音波で まわりの 様子を 探る。 狭い 洞窟も 器用に 飛びまわる。",
		'zh-tw': "會利用從口中發出的超音波探查周圍的狀況。在狹窄的 洞窟裡也能靈巧地飛來飛去。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656351,
				tcgplayer: 570704,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577118,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [41],
};

export default card;
