import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ペロリーム",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "わずかな においでも かぎわける 敏感な きゅうかくを 活かして パティシエの 手伝いを している。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とろけるにおい" },
			cost: ["Fairy"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "スイートパニック" },
			damage: 110,
			cost: ["Fairy"],
			effect: {
				ja: "相手のバトルポケモンがこんらんでないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554931,
			},
		},
	],

	evolveFrom: {
		ja: "ペロッパフ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [685],
};

export default card;
