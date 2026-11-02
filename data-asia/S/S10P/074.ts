import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ オオニューラV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのツメ" },
			cost: [],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "フェイタルクロー" },
			damage: "80×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数×80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651337,
				tcgplayer: 569917,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [903],
};

export default card;
