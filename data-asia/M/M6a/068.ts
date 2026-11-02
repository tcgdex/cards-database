import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "高熱で 水を 蒸発させて 大地を 広げたと 言われている。 カイオーガと 激しく 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "グラウンドブレイク" },
			damage: 250,
			cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908246,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [383],
};

export default card;
