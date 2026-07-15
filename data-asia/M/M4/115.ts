import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフラエッテex",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やさしいひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "おたがいのポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
		{
			name: { ja: "エタニティブルーム" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "自分の山札から「基本[P]エネルギー」を4枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877376,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [670],

	suffix: "EX",
};

export default card;
