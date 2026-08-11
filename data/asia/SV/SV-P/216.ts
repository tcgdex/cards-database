import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "何匹かが 集まっていると そこに 猛烈な 電気が 溜まり 稲妻が 落ちることがあるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんじスパーク" },
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 780800,
				tcgplayer: 587923,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [25],
};

export default card;
