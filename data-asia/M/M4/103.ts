import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "なめらかコート" },
			effect: {
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジービンタ" },
			damage: "40×",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877345,
			},
		},
	],

	evolveFrom: {
		ja: "チラーミィ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [573],

	suffix: "EX",
};

export default card;
