import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "木の枝を 尻尾から 引き抜くとき 摩擦で 着火。 枝の 炎を 振って 仲間に 合図を 送る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "フレアパレード" },
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある「セレナ」の枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673386,
				tcgplayer: 570832,
			},
		},
	],

	evolveFrom: {
		ja: "フォッコ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [654],
};

export default card;
