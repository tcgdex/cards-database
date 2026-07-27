import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオン",
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "両腕の ツメは 自動車を スクラップにする 破壊力。 ツメの 先から 毒を 出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "キラースティンガー" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくとマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559840,
			},
		},
	],

	evolveFrom: {
		ja: "スコルピ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [452],
};

export default card;
