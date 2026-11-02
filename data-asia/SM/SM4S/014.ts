import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "シザリガー",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "池に 住む ほかの ポケモンを ハサミで つまみ上げ 池の 外へ 放り出してしまう 暴れん坊。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルニッパー" },
			damage: 80,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560326,
			},
		},
	],

	evolveFrom: {
		ja: "ヘイガニ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [342],
};

export default card;
