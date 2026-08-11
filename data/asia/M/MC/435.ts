import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドラン♂",
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "小柄だが 勇ましい 性質。 仲良しの メスを 守るため 身を ていして 果敢に 戦う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863737,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [32],
};

export default card;
