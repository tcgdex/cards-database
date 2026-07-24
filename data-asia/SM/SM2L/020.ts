import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

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
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "前の相手の番に、相手のポケモンがワザ(GXワザをのぞく)を使っていたなら、そのワザをこのワザとして使う。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561424,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [778],
};

export default card;
