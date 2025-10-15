import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ギガイアス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "体内の コアで エネルギーを 圧縮して 撃ち出す 攻撃は 山を 吹き飛ばす 威力。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "リベンジキャノン" },
			damage: "20x",
			cost: ["Fighting"],
			effect: {
				ja: "自分のベンチのポケモン全員にのっているダメカンの数×20ダメージ。",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 160,
			cost: ["Fighting", "Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ガントル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [526],
};

export default card;
