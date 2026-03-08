import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムex",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ブレイズバースト" },
			damage: "130+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
	dexId: [643],
	thirdParty: {
		cardmarket: 829527,
		tcgplayer: 636721,
	},
};

export default card;
