import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲボウズ",
		'zh-tw': "怨影娃娃",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "日暮れに カゲボウズが 並ぶような 家とは 付き合うな と いう 古い ことわざが 残っている。",
		'zh-tw': "不要去跟那些在黃昏時有怨影娃娃在排隊的人家來往。這是自古流傳下來的諺語。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おにび" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560452,
				tcgplayer: 569168,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [353],
};

export default card;
