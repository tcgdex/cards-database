import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "デスマス",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "夜な夜な 遺跡を さまよう。 もっている マスクは 人 だった ころの 自分の 顔 だという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つぶやく" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "ちょっとうらむ" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863621,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [562],
};

export default card;
