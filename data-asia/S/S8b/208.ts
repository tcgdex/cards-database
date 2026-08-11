import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "体の模様 から 本来 ガラルには いない ポケモンと 考える 学者も 多い。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルトランス" },
			effect: {
				ja: "自分の番に何回でも使える。自分の場のポケモンについている[鋼]エネルギーを1個選び、自分の別のポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しねんのずつき" },
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586946,
				tcgplayer: 571460,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [437],
};

export default card;
