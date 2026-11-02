import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレムex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きこうあつ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが「50」になるように、ダメカンをのせる。",
			},
		},
		{
			name: { ja: "ヨガキック" },
			damage: 190,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863672,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [308],

	suffix: "EX",
};

export default card;
