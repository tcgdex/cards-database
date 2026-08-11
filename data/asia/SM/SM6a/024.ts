import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナックラー",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "大きな 顎で 邪魔な 岩を 砕きながら 砂を 掘る。 巣穴の 形は スリ鉢状。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミニじしん" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559290,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [328],
};

export default card;
