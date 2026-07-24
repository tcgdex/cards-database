import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴローニャ",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "年老いると 脱皮 しなくなる。 長く長く 生きた ゴローニャの カラは 苔むしていて 緑だ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ハードローラー" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "ヘビーボンバー 180-" },
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x20ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558143,
			},
		},
	],

	evolveFrom: {
		ja: "ゴローン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [76],
};

export default card;
