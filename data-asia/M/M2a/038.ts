import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのバニリッチ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "あたりの 空気を 冷やして 氷の 粒を 発生させて 敵の 体を 凍りつかせる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ぜったいれいど" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861281,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861588,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861589,
			},
		},
	],

	evolveFrom: {
		ja: "Nのバニプッチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [583],
};

export default card;
