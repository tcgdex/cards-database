import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ナッシー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 敵を 迎え撃つ。 ３つの頭 それぞれが 念力を 放つので その威力は ３倍だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイコトリップ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "まるさばき" },
			damage: 180,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "自分の手札をすべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556993,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
