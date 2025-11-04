import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ギガイアス",
	},

	illustrator: "toi8",
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
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ガントル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [526],
};

export default card;
