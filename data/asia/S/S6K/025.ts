import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
		'zh-tw': "鬼斯",
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "薄い ガスのような 体で どこにでも 忍びこむが 風が 吹くと 吹きとばされる。",
		'zh-tw': "能用稀薄氣體狀的身體潛入任何地方，但只要起風就會被吹跑。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねむりのはどう",
				'zh-tw': "睡眠波動",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560774,
				tcgplayer: 569253,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [92],
};

export default card;
