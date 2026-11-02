import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤンマ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "あごの 力は けたはずれ。 高速で 飛んで すれ違いざまに 相手を かみちぎるのが 得意。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ジャイロソニック" },
			damage: 110,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 778392,
				tcgplayer: 587907,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンヤンマ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [469],
};

export default card;
