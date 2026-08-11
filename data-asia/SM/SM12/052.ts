import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンドパン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "雪原を 高速で 駆ける。 雪を 掻きわけるために ツメが ぶっとく 鋭く 発達した。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まるまるアタック" },
			damage: 30,
			cost: [],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "きょうかニードル" },
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554906,
			},
		},
	],

	evolveFrom: {
		ja: "アローラサンド",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [28],
};

export default card;
