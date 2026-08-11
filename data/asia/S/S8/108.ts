import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フュージョンシステム" },
			effect: {
				ja: "自分の番に1回使える。自分の手札の枚数が、自分の場の「フュージョン」のポケモンの数と同じ枚数になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "テクノバスター" },
			damage: 210,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576186,
				tcgplayer: 569609,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [649],
};

export default card;
