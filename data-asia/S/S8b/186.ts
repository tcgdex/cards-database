import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アップリュー",
	},

	illustrator: "Misaki Hashimoto",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "すっぱい りんごを 食べて 進化。 火傷する ほど 強酸性の 液体を 頬袋に 溜める。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アップルドロップ" },
			effect: {
				ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。その後、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アシッドボム" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586925,
				tcgplayer: 571438,
			},
		},
	],

	evolveFrom: {
		ja: "カジッチュ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [841],
};

export default card;
