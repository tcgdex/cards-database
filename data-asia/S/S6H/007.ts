import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "アマカジ",
		'zh-tw': "甜竹竹",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "襲われた ときに 流す 汗は 甘くて 美味しい。 その 香りが さらに 敵を 増やしてしまうのだ。",
		'zh-tw': "受到襲擊時流下的汗水非常甜美可口。那種香氣會吸引更多敵人的注意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねる",
				'zh-tw': "羽擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560423,
				tcgplayer: 569139,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [761],
};

export default card;
