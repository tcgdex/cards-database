import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "時間を超えて あちこち さまよう。 セレビィが 姿を 現した 森は 草木が 生い茂るという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タイムスパイラル" },
			cost: ["Grass"],
			effect: {
				ja: "相手の進化しているポケモン1匹から、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "サイコトリップ" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556962,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [251],
};

export default card;
