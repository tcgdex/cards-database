import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツオロチex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅくせいチャージ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から「基本[G]エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みつあめストーム" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン全員についている[G]エネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863355,
			},
		},
	],

	evolveFrom: {
		ja: "カミッチュ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [1019],

	suffix: "EX",
};

export default card;
