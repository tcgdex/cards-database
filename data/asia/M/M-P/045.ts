import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "燃える 尻尾を 振りまわすと まわりの 温度が どんどん 上がって 相手を 苦しめる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひをはく" },
			damage: 40,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858263,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [5],
};

export default card;
