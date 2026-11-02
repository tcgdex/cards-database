import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "時間を 操る 力を 持つ。 シンオウ地方では 神様と 呼ばれ 神話に 登場する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビーム" },
			damage: 30,
			cost: ["Metal"],
		},
		{
			name: { ja: "クロノバースト" },
			damage: "80+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーをすべて山札にもどして切り、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863804,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [483],
};

export default card;
