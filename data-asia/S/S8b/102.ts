import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "デルビル",
		'zh-tw': "戴魯比",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "夜明け前に 不気味な 遠吠えを 繰り返し 自分たちの 群れの 存在を アピール している。",
		'zh-tw': "會在天亮前反覆發出令人不寒而慄的長嚎，藉此強調 自己群體的存在。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586618,
				tcgplayer: 571355,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578402,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [228],
};

export default card;
