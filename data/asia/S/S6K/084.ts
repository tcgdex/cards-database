import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィVMAX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いやしのもり" },
			effect: {
				ja: "自分の番に1回使える。自分の[草]ポケモン全員のHPを、それぞれ「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイプラント" },
			damage: 130,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560985,
				tcgplayer: 569312,
			},
		},
	],

	evolveFrom: {
		ja: "セレビィV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [251],
};

export default card;
