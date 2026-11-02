import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒメンカ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "一本足を 地面に 刺して 陽の光を たっぷり 浴びると 花びらが 鮮やかに 色づく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うたう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463004,
				tcgplayer: 597241,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [829],
};

export default card;
