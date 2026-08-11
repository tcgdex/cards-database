import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "まわりの 環境に 合わせて 体の つくりを 変えていく 能力の 持ち主。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はじめのいっぽ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "しっぽではたく" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597301,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [133],
};

export default card;
