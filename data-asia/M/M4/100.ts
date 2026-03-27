import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "パンプジンex",
	},

	illustrator: "Ryo Ueda",
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
			damage: "50x",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のベンチポケモンにのっているダメージカウンターの合計×50多くなる。",
			},
		},
		{
			name: { ja: "ゴーストタッチ" },
			damage: 160,
			cost: ["Psychic", "Psychic", "Colorless"],
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
	rarity: "Ultra Rare",
	dexId: [711],

	suffix: "EX",
};

export default card;
