import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "怒ったり 驚いたりすると 全身の 毛が 針の ように 逆立って 相手を つらぬく。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じんらいのめざめ" },
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[水]ポケモンの特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライトニングボール" },
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586932,
				tcgplayer: 571445,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [135],
};

export default card;
