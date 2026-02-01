import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "カブルモ",
	},

	illustrator: "Tomokazu Komiya",
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

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [588],

	thirdParty: {
		cardmarket: 829336,
		tcgplayer: 636448,
	},
};

export default card;
