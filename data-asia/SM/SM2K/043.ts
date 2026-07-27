import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナス",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "幸せが つまっていると いわれる ハピナスの タマゴを 食べれば どんな 凶暴な ポケモンも 穏やかに。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うみたてタマゴ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトルポケモンのHPを「80」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "すてみタックル" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561509,
			},
		},
	],

	evolveFrom: {
		ja: "ラッキー",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [242],
};

export default card;
