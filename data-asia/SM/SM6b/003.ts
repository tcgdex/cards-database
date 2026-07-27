import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツボット",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "体内に 取りこまれた ものは どんなに 硬くても 溶解液で 跡形なく 溶かされてしまう。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かおりのわな" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "さんでとかす" },
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559153,
			},
		},
	],

	evolveFrom: {
		ja: "ウツドン",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [71],
};

export default card;
