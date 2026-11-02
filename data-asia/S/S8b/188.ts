import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "体内に 炎が 溜まると ブースターの 体温も 最高 ９００度 まで 上がっていく。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しゃくねつのめざめ" },
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[草]ポケモンの特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのたてがみ" },
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586927,
				tcgplayer: 571440,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [136],
};

export default card;
