import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "カブルモ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "チョボマキと 一緒に いるときに 電気的な 刺激を 受けると 進化する 不思議な ポケモンだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しげきしんか" },
			effect: {
				ja: "自分の場に「チョボマキ」がいるなら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。",
			},
		},
	],

	attacks: [{ name: { ja: "つのでつく" }, damage: 10, cost: ["Colorless"] }],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [588],

	thirdParty: {
		cardmarket: 828449,
		tcgplayer: 636363,
	},
};

export default card;
