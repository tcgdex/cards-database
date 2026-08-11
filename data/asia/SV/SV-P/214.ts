import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ホゲータ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 30,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 780798,
				tcgplayer: 587921,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [909],
};

export default card;
