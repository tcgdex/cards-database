import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "オオスバメ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "２本の 尾羽が ピンと 立って いれば 健康な 証拠。 優雅に 大空を 飛び回る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "スワローダイブ" },
			damage: "40+",
			cost: ["Colorless"],
			effect: {
				ja: "前の自分の番、このポケモンが「こうそくいどう」を使っていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561511,
			},
		},
	],

	evolveFrom: {
		ja: "スバメ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [277],
};

export default card;
