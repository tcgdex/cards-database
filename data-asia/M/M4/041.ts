import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "パンプジンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ホラーロンド" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "このワザのダメージは、相手のベンチポケモンにのっているダメージカウンターの合計×50多くなる。",
			},
		},
		{
			name: { ja: "ゴーストタッチ" },
			damage: 140,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の手札をランダムに1枚選んでトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	evolveFrom: {
		ja: "バケッチャ",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [711],

	suffix: "EX",
};

export default card;
