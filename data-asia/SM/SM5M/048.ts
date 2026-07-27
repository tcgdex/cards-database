import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロップ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "耳は とても デリケートらしく 優しく 丁寧に 触らないと しなやかな 脚で けられてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふみふみ" },
			damage: "40×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x40ダメージ。",
			},
		},
		{
			name: { ja: "ハッピーターン" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559861,
			},
		},
	],

	evolveFrom: {
		ja: "ミミロル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [428],
};

export default card;
