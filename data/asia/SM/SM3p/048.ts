import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミカルゲ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "１０８個の 魂が 集まって 生まれた ポケモン。 要石の ひび割れに つながれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅばくのうず" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "のろいのしずく" },
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560206,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [442],
};

export default card;
