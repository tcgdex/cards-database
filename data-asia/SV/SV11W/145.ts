import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "３本の トゲつき 触手を 振り回して 戦う。 鋼の トゲは たたきつけると 大岩を 粉砕する 破壊力だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パワーウィップ" },
			cost: ["Metal"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについているエネルギーの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "メタルクロー" },
			damage: 130,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "テッシード",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [598],
};

export default card;
