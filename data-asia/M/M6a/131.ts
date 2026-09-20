import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガーex",
	},

	illustrator: "CHORISO",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しのせんこく" },
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "カオスペイン" },
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを13個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908309,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [94],

	suffix: "EX",
};

export default card;
