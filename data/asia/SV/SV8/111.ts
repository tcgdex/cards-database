import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "タマザラシ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ぶ厚い 脂肪に 包まれた 見事に まんまるな 体。 歩くより 転がるほうが 速い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こなゆき" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793575,
				tcgplayer: 587690,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [363],
};

export default card;
