import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハバタクカミ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あんやのはばたき" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手のバトルポケモンの特性（「あんやのはばたき」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たたりとばす" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカン2個を、相手のベンチポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752798,
				tcgplayer: 568367,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [987],
};

export default card;
