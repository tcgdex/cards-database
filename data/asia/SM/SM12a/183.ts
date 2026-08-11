import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラGX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドーコネクション" },
			effect: {
				ja: "自分の番に何回でも使える。自分の場のポケモンについている基本[悪]エネルギーを1個、自分の別のポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
		{
			name: { ja: "よるのごうれいGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを好きなだけ、ベンチに出す。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544661,
			},
		},
	],

	evolveFrom: {
		ja: "ニューラ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [461],

	suffix: "GX",
};

export default card;
