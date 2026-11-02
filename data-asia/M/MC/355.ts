import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハバタクカミ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あんやのはばたき" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンの特性（「あんやのはばたき」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たたりとばす" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ダメカン2個を、相手のベンチポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863657,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [987],
};

export default card;
