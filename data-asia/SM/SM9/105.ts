import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス&ラティオスGX",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 250,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バスターパージ" },
			damage: 240,
			cost: ["Water", "Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
		{
			name: { ja: "エアロユニットGX" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを5枚、自分のポケモンに好きなようにつける。追加でエネルギーが1個ついているなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558480,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [380, 381],

	suffix: "TAG TEAM-GX",
};

export default card;
