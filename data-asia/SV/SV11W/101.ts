import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "尻尾の 穴から 空気を 吸って 体内で 炎を 燃やす。 アイアントの 天敵。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ベロベロキャッチ" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札からポケモンと「基本エネルギー」を合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{ name: { ja: "ほのおのツメ" }, damage: 60, cost: ["Fire", "Fire"] },
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [631],
	thirdParty: {
		cardmarket: 829457,
		tcgplayer: 636654,
	},
};

export default card;
