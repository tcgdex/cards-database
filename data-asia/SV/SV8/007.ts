import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃",
		'zh-cn': "熱辣娃",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。",
		'zh-tw': "帕底亞當地會用熱辣娃 掉落的門牙來做料理， 所以超級無敵霹靂辣。",
		'zh-cn': "帕底亞當地會用熱辣娃 掉落的門牙來做料理， 所以超級無敵霹靂辣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				'zh-cn': "魯莽頭擊",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793441,
				tcgplayer: 587587,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [951],
};

export default card;
