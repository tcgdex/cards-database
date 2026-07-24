import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "デスマス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "持っている マスクは デスマスが 人間だった ときの 顔。 たまに 見つめては 泣いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のろう" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558844,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [562],
};

export default card;
