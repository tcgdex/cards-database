import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "マタドガス",
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "どちらかが ふくらむと 片方は しぼむ 双子の ドガース。いつも 体内の 毒ガスを 混ぜている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぶっとびボム" },
			effect: {
				ja: "自分の番に、このカードが「ホミカ」の効果でトラッシュされたとき、1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。（ダメカンをのせるのは「ホミカ」の効果のあと。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バルーンバースト" },
			damage: 90,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555173,
			},
		},
	],

	evolveFrom: {
		ja: "ドガース",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [110],
};

export default card;
