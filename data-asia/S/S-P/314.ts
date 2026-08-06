import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャース",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "戦闘的な 海洋民族と 暮らすうちに 鍛えられ 体の あちこちが 黒鉄に 変化した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメをだす" },
			damage: "10+",
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678822,
				tcgplayer: 597487,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [52],
};

export default card;
