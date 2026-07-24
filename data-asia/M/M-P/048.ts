import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ノココッチ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にげあしドロー" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を3枚引く。その後、このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ランドクラッシュ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858266,
			},
		},
	],

	evolveFrom: {
		ja: "ノコッチ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [982],
};

export default card;
