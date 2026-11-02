import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "つららショット" },
			damage: 180,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "クリスタルスター" },
			damage: 220,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 604995,
				tcgplayer: 597444,
			},
		},
	],

	evolveFrom: {
		ja: "グレイシアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [471],
};

export default card;
