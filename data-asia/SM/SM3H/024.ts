import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ペンドラー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "獲物を 首のツメで 挟みこみ 身動きを とれなくしてから 猛毒を 与え とどめを 刺す。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "どくのつの" },
			damage: 80,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ハードローラー" },
			damage: 140,
			cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
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
		ja: "ホイーガ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [545],
};

export default card;
