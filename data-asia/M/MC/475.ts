import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バルジーナex",
	},

	illustrator: "Ultimateinudog",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほねシュート" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "バルチャークロー" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863777,
			},
		},
	],

	evolveFrom: {
		ja: "バルチャイ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [630],

	suffix: "EX",
};

export default card;
