import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドキング",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "迷ったら ヤドキングに聞け という ことわざが 残る 地域も あるほど 賢いことで 有名 なのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きおくをとろかす" },
			cost: ["Water"],
			effect: {
				ja: "相手の手札を見て、その中にあるカードを1枚、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558664,
			},
		},
	],

	evolveFrom: {
		ja: "ヤドン",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [199],
};

export default card;
