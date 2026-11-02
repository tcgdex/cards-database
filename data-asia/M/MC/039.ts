import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ピンポイントダイブ" },
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチの「ポケモンex・V」1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "うしろげり" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863330,
			},
		},
	],

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [492],
};

export default card;
