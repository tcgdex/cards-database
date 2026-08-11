import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのロゼリア",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "右手と 左手で ２種類の 毒を 使いわけて 攻撃する。 香りが 強いほど 元気だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トゲでさす" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861253,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861540,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861541,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [315],
};

export default card;
