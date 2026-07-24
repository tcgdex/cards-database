import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スカーチャージ" },
			effect: {
				ja: "自分の番に1回使える。このポケモンにダメカンを3個のせる。その後、自分の山札にある[悪]エネルギーを3枚まで、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クラッシュパンチ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "DDトルネードGX" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x50ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558629,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [727],

	suffix: "GX",
};

export default card;
