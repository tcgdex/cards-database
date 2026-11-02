import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲキ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "帯を 締めると パワーアップする。 野生の ナゲキは つる草を 編んで 自分の 帯を 作る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぎゃくぜおい" },
			damage: "30+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556654,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [538],
};

export default card;
