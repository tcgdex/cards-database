import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーンVMAX",
		'zh-tw': "頭蓋龍",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "キョダイカキュウ",
				'zh-tw': "衝撞",
			},
			damage: 230,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 540531,
				tcgplayer: 597367,
			},
		},
	],

	evolveFrom: {
		ja: "エースバーンV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [815],
};

export default card;
