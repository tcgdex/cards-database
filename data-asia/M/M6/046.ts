import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミラミ",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "洞窟の 暗闇に 潜む。 宝石を 食べているうちに 目が 宝石に なってしまった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おびきだす" },
			cost: ["Darkness"],
			effect: {
				ja: "相手の山札を上から5枚オモテにして、その中からたねポケモンを好きなだけ選び、相手のベンチに出す。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "ふきつなめ" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを5個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899949,
				tcgplayer: 709199,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [302],
};

export default card;
