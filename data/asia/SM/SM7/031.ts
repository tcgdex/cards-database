import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "レジアイス",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "氷河期に できた 氷で 体が 作られている。 マイナス２００度の 冷気を 操る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こおりのけっかい" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からスタジアムを出せない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "こごえるかぜ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558992,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [378],
};

export default card;
