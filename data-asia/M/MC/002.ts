import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのクサイハナ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "ねばねばした よだれのような 蜜。 とても 甘いのだが においが 異常に 臭くて 近寄れない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくをとばす" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863289,
			},
		},
	],

	evolveFrom: {
		ja: "エリカのナゾノクサ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [44],
};

export default card;
