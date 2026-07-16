import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さとりのいちげき" },
			damage: "10+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "このポケモンの残りHPが「30」以下なら、160ダメージ追加。",
			},
		},
		{
			name: { ja: "スピニングキック" },
			damage: 90,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559007,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [308],
};

export default card;
