import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "春になると アイスキャンディーの ような 食感の 木の実が お腹の まわりに 生る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こおりのつぶて" },
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[闘]ポケモンなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559753,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [459],
};

export default card;
