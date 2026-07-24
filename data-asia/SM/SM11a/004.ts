import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "太いツノが 自慢。 アローラでは クワガノンが 最大の ライバルで しょっちゅう ケンカを している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきたおし" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "なにくそホーン" },
			damage: "50+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場に「TAG TEAM」のポケモンがいるなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556564,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [214],
};

export default card;
