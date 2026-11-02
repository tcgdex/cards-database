import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "磨きあげた 金属の ような 体は 軽いうえに 硬いが 錆びやすいのが 欠点なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メタルクロー" },
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
		},
		{
			name: { ja: "てっていこうせん" },
			damage: 150,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463049,
				tcgplayer: 597250,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [884],
};

export default card;
