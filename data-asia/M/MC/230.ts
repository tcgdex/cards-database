import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ゴローニャ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 180,
	types: ["Lightning"],

	description: {
		ja: "電気を帯びた 岩を 発射。 命中 せずとも かするだけで 相手は 痺れ 失神する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "でんじカタパルト" },
			damage: "70×",
			cost: ["Lightning"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×70ダメージ。",
			},
		},
		{
			name: { ja: "メガトンフォール" },
			damage: 160,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863526,
			},
		},
	],

	evolveFrom: {
		ja: "アローラゴローン",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [76],
};

export default card;
