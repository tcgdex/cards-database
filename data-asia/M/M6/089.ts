import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "メガグソクムシャex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とどめをさす" },
			damage: "60+",
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、160ダメージ追加。",
			},
		},
		{
			name: { ja: "クワトロホールド" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900115,
				tcgplayer: 709242,
			},
		},
	],

	evolveFrom: {
		ja: "コソクムシ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [768],

	suffix: "EX",
};

export default card;
