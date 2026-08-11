import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フロストバレット" },
			damage: 110,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ユークレース" },
			cost: ["Grass", "Water", "Darkness"],
			effect: {
				ja: "ダメカンが6個のっている相手のポケモンを1匹選び、きぜつさせる。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863458,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [471],

	suffix: "EX",
};

export default card;
