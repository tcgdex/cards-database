import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "キャモメ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "キャモメが 飛び交う 海の 下は さかなポケモンが 群れているので 漁師は まずキャモメを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559030,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [278],
};

export default card;
