import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "光の 点滅で 襲ってきた 敵の 戦意を なくしてしまう。 その すきに 姿を くらますのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいみんじゅつ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550696,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [686],
};

export default card;
