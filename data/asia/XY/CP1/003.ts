import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のタマザラシ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "タマザラシの 水鉄砲は どんな 火だろうと 消せるの。 敵の 使う 炎なんて 効かないわ！",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563723,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [363],
};

export default card;
