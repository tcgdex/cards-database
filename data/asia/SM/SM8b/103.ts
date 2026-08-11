import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バクガメス",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		ja: "鼻の 孔から 炎や 毒ガスを 吹く。 フンは 爆発物で 色んな 使い道が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ばくふんしゃ" },
			damage: "50×",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "自分の場のポケモンについている[炎]エネルギーを好きなだけトラッシュし、その枚数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551011,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [776],
};

export default card;
