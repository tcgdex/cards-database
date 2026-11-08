import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レジアイス",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "マイナス２００度まで 冷えこむ 冷気を 操り 近づいたものを あっという間に 氷漬けにする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つらら" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
		{
			name: { ja: "ふぶき" },
			damage: 90,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863487,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [378],
};

export default card;
