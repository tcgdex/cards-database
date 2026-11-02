import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "宇宙ウイルスが 突然変異を 起こして ポケモンに なった。 オーロラの 近くに 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リフレクター" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。",
			},
		},
		{
			name: { ja: "サイコスクリュー" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
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
				cardmarket: 559004,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
