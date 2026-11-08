import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メルタン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'ja-jp': "とろりと 溶けた 鋼の 体。 地中の 鉄分や 金属を 溶かして 吸収する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はがねとかし" },
			damage: "10+",
			cost: ["Metal"],
			effect: {
				'ja-jp': "相手のバトルポケモンが[鋼]ポケモンなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558155,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [808],
};

export default card;
