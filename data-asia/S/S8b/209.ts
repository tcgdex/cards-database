import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "クリムガン",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "凶暴で ずる賢い。 ほかの ポケモンが 掘った 巣穴を 奪って すみかにする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リベンジ" },
			damage: "40+",
			cost: ["Fire", "Water"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 120,
			cost: ["Fire", "Water", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586947,
				tcgplayer: 571461,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [621],
};

export default card;
