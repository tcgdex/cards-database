import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タマザラシ",
	},

	illustrator: "Teeziro",
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
			type: "normal",
			thirdParty: {
				cardmarket: 863484,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [363],
};

export default card;
