import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤバソチャex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "せんじがえし" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある「基本[G]エネルギー」をすべて相手に見せ、その枚数×2個ぶんのダメカンを、相手のポケモン1匹にのせる。その後、見せたエネルギーを山札にもどして切る。",
			},
		},
		{
			name: { ja: "まっちゃスプラッシュ" },
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863370,
			},
		},
	],

	evolveFrom: {
		ja: "チャデス",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1013],

	suffix: "EX",
};

export default card;
