import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "デルビル",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "仲間に 連絡するときと 獲物を 追いつめるときでは 鳴き声の 種類が 違うのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やんちゃげり" },
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863751,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [228],
};

export default card;
