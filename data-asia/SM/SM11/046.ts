import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "太いツノが 自慢。 アローラでは クワガノンが 最大の ライバルで しょっちゅう ケンカを している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どひょうがえし" },
			cost: ["Colorless"],
			effect: {
				ja: "前の相手の番に、相手のポケモンがGXワザを使っていたなら、相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557008,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [214],
};

export default card;
