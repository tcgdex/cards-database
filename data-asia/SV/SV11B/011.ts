import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "モロバレル",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "両腕の モンスターボールに 似た カサを ゆらゆらと 動かして 獲物を 誘う ダンスを 踊る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あぶないはんのう" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "タネばくだん" },
			damage: 60,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "タマゲタケ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [591],

	thirdParty: {
		cardmarket: 828457,
		tcgplayer: 636365,
	},
};

export default card;
