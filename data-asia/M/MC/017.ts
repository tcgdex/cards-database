import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ベイリーフ",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "首の まわりから 発散する スパイスのような 香りには 元気を 出させる 効果がある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リーフステップ" },
			damage: 60,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863304,
			},
		},
	],

	evolveFrom: {
		ja: "チコリータ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [153],
};

export default card;
