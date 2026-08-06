import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイVMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "キョダイホーヨー" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525190,
				tcgplayer: 597302,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [133],
};

export default card;
