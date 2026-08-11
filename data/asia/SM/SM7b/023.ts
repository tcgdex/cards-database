import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "怪しげな 炎で 燃やされた 魂は 行き場を なくし この 世を 永遠に さまよう。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "のろいのしずく" },
			cost: ["Psychic"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。",
			},
		},
		{
			name: { ja: "いたみのらせん" },
			damage: "20×",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の場のポケモンにのっているダメカンの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558848,
			},
		},
	],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [609],
};

export default card;
