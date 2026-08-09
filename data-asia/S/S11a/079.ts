import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ギアスロー" },
			cost: ["Metal"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "スペシャルレーザー" },
			damage: "100+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673396,
				tcgplayer: 570842,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [801],
};

export default card;
