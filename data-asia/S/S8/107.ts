import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパV",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルフェイス" },
			effect: {
				ja: "このポケモンは、場にいるかぎり[超]と[悪]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーインパクト" },
			damage: 170,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "自分のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576185,
				tcgplayer: 569608,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [720],
};

export default card;
