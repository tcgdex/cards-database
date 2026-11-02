import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハッピーシェア" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン1匹のHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908292,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♀",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [30],
};

export default card;
