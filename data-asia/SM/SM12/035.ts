import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリGX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たむけのまい" },
			effect: {
				ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札を3枚引く。この番、すでに別の「たむけのまい」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "するどいはね" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ひるがえすGX" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554852,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [741],

	suffix: "GX",
};

export default card;
