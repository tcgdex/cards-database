import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローニャ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "電気を帯びた 岩石を 発射。 命中 せずとも かするだけで 相手は 痺れ 失神する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "でんじがんせきほう" },
			damage: "80×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーの数ぶんコインを投げ、オモテの数x80ダメージ。",
			},
		},
		{
			name: { ja: "ヘビーボンバー 200-" },
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x30ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561421,
			},
		},
	],

	evolveFrom: {
		ja: "アローラゴローン",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [76],
};

export default card;
