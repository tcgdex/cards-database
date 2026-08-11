import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
		'zh-tw': "雪吞蟲",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "地面に 積もった 雪を 食べる。 たくさん 食べれば 食べるほど 背中の 棘は 立派に 育つ。",
		'zh-tw': "會吃地面上的積雪。吃得越多，背上的刺就會長得越挺拔。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586555,
				tcgplayer: 571292,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578376,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [872],
};

export default card;
