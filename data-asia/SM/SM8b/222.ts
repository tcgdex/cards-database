import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツロイドGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うつろなひかり" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。おたがいのバトルポケモンを、それぞれどくとこんらんにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とじこめる" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "パラサイトGX" },
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手の山札を上から2枚、相手のサイドとして置く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551606,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [793],

	suffix: "GX",
};

export default card;
