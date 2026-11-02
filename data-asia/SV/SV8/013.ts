import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "メラルバ",
		'zh-tw': "燃燒蟲",
		'zh-cn': "燃燒蟲",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "大昔は 太陽の遣い と 崇められたが しばしば 山火事を 起こすこともあり 煙たがられた。",
		'zh-tw': "在遙遠的過去曾被信奉成 太陽的使者，但卻因為常常 引發森林大火而遭人們疏遠。",
		'zh-cn': "在遙遠的過去曾被信奉成 太陽的使者，但卻因為常常 引發森林大火而遭人們疏遠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				'zh-cn': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ひをはく",
				'zh-tw': "吐火",
				'zh-cn': "吐火",
			},
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793447,
				tcgplayer: 587593,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [636],
};

export default card;
