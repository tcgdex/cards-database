import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "正体不明。 ボロ布の 中身を みた とある 学者は 恐怖の あまり ショック死した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くすねる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "まねっこ" },
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "前の相手の番に、相手のポケモンがワザ（GXワザをのぞく）を使っていたなら、そのワザをこのワザとして使う。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550971,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [778],
};

export default card;
