import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "トドロクツキ",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "謎の 多い 探検記の中で トドロクツキという 名で 記された 生物の 可能性が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あだうちやばね" },
			damage: "70+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分のトラッシュにある「古代」のカードの枚数×10ダメージ追加。",
			},
		},
		{
			name: { ja: "スピードウイング" },
			damage: 120,
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752832,
				tcgplayer: 568385,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1005],
};

export default card;
