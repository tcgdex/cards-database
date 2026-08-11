import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペンドラー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'ja-jp': "獲物を 首のツメで 挟みこみ 身動きを とれなくしてから 猛毒を 与え とどめを 刺す。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "どくのつの" },
			damage: 80,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ハードローラー" },
			damage: 140,
			cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561088,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホイーガ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [545],
};

export default card;
