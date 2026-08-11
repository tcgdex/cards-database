import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "普段は 落ち着いているが 一度 怒らせると 体を 丸めて 回転しながら 突っ込んでくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うちのめす" },
			damage: 40,
			cost: ["Fighting"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "ガードローリング" },
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863668,
			},
		},
	],

	evolveFrom: {
		ja: "ゴマゾウ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [232],
};

export default card;
