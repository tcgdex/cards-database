import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤルキモノ",
		'zh-tw': "過動猿",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体を 動かしていないと ストレスが たまりすぎて 具合が 悪くなって しまうのだ。",
		'zh-tw': "如果不活動身體，就會累積過多的壓力，使身體狀況變糟。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たたきこわす",
				'zh-tw': "敲壞",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "場に出ているスタジアムをトラッシュする。",
				'zh-tw': "將場上的競技場卡丟棄。",
			},
		},
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571639,
				tcgplayer: 569374,
			},
		},
	],

	evolveFrom: {
		ja: "ナマケロ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [288],
};

export default card;
