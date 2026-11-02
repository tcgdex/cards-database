import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パルデア ウパー",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "単独行動は 危険なので ３、４匹が 一列に 並んで 助け合いながら 沼地を 歩く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころばす" },
			damage: "10+",
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807420,
				tcgplayer: 656026,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [194],
};

export default card;
