import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドドゲザン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "ドドゲザンに 進化できるのは 大軍勢の 頂点に 立った １匹の キリキザンだけなのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ひじうち" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "スライスブレード" },
			damage: 100,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863775,
			},
		},
	],

	evolveFrom: {
		ja: "キリキザン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [983],
};

export default card;
