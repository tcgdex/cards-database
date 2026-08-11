import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトムV",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "そくせきじゅうでん" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スクラップショート" },
			damage: "40+",
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "自分のトラッシュにある「ポケモンのどうぐ」を好きなだけロストゾーンに置き、その枚数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668222,
				tcgplayer: 570035,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [479],
};

export default card;
