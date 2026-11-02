import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのミカルゲ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レイジングカース" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチの「シロナのポケモン」全員にのっているダメカンの数×10ダメージ。このワザのダメージは弱点を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861351,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861704,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861705,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [442],
};

export default card;
