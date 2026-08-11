import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルー",
		'zh-tw': "布魯",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "見た目と 違って 臆病なので 他の こいぬポケモンと 一緒に すると いじめられることも ある。",
		'zh-tw': "個性與外表相反，其實很膽小。要是把牠和其他小狗寶可夢放在一起，牠有可能會被欺負。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575596,
				tcgplayer: 569542,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [209],
};

export default card;
