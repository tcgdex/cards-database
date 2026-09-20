import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャース",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "戦闘的な 海洋民族と 暮らすうちに 鍛えられ 体の あちこちが 黒鉄に 変化した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ネコにこばん" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "おたからラッシュ" },
			damage: "10×",
			cost: ["Metal"],
			effect: {
				ja: "自分の手札の枚数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908258,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [52],
};

export default card;
