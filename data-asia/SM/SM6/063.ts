import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "クレッフィ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "頭の角を 金属の すき間に 突っ込んで 金属イオンを 吸う。 なぜか カギを 集めている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きんぞくおん" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "フェアリーロック" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559608,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [707],
};

export default card;
