import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "体内で 渦巻く 力を 電撃として 出しながら 大地を 駆け巡る 荒々しい ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アメイジングシュート" },
			damage: 120,
			cost: ["Grass", "Lightning", "Metal"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908340,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Classic Collection",
	dexId: [243],
};

export default card;
