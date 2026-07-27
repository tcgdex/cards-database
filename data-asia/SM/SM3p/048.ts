import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂が 集まって 生まれた ポケモン。 要石の ひび割れに つながれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅばくのうず" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "のろいのしずく" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。",
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
