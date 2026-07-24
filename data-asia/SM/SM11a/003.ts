import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "モジャンボ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "植物の ツルで できた 腕を 伸ばして 獲物を 絡め取る。 腕を 食べられても へっちゃら。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くさむすび" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "たたきつける" },
			damage: "80×",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556562,
			},
		},
	],

	evolveFrom: {
		ja: "モンジャラ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [465],
};

export default card;
