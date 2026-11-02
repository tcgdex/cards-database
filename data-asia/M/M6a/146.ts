import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning", "Metal"],

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "デルタコントロール" },
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分の山札の上からカードを4枚見て、好きなカードを1枚選び出し、手札に加える。その後、残りのカードを好きな順番に入れ替え、その山札の下にもどす。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クラッシュバーン" },
			damage: "30+",
			cost: ["Lightning", "Metal"],
			effect: {
				ja: "のぞむなら、自分の場のエネルギーを好きなだけトラッシュしてよい。その場合、トラッシュしたエネルギーの枚数×20ダメージを追加する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908324,
			},
		},
	],

	retreat: 3,
	rarity: "Classic Collection",
	dexId: [376],
};

export default card;
