import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリジュラスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ごうきんビルド" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本[M]エネルギー」を2枚まで選び、自分の[M]ポケモンに好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メタルディフェンダー" },
			damage: 220,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "次の相手の番、このポケモンの弱点は、すべてなくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861365,
			},
		},
	],

	evolveFrom: {
		ja: "ジュラルドン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1018],

	suffix: "EX",
};

export default card;
