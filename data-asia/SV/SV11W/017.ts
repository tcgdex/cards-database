import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "レシラムex",
	},

	illustrator: "5ban Graphics",
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

	weaknesses: [{ type: "Water", value: "×2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
	dexId: [643],

	thirdParty: {
		cardmarket: 829019,
		tcgplayer: 636570,
	},
};

export default card;
