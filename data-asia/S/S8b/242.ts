import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ファイヤーV",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゃえんのつばさ" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[悪]エネルギーを1枚選び、このポケモンにつける。この番、すでに別の「じゃえんのつばさ」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーラバーン" },
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587040,
				tcgplayer: 571494,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [146],
};

export default card;
