import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ノズパス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "１年に １センチしか 動かないが ピンチに 陥ると 回転し 一瞬で 地中に 潜る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきよせる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "でんじほう" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554864,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [299],
};

export default card;
