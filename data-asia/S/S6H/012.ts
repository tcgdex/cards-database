import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ",
		'zh-tw': "小獅獅",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "血気盛んで 好奇心旺盛。 怒ったり 戦いが 始まると 短い たてがみは 熱くなる。",
		'zh-tw': "血氣方剛且好奇心旺盛。當牠生氣或是開始戰鬥時，短短的鬃毛就會變熱。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひだね",
				'zh-tw': "蕩蕩波",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560428,
				tcgplayer: 569144,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [667],
};

export default card;
