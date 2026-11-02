import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノブジン",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "とある 探検記の中で テツノブジンという 名で 記された 物体の 可能性が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジェミニレーザー" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "しねんのやいば" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「しねんのやいば」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863659,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1006],
};

export default card;
