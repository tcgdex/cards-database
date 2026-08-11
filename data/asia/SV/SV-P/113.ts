import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デスマス",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "古代人の 魂が ポケモンに なった。 自分の 顔を 知る 人を 探し 遺跡を さまよう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきつなめ" },
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740414,
				tcgplayer: 587863,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [562],
};

export default card;
