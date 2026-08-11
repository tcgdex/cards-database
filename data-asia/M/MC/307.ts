import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲボウズ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "恨みや 妬みの 感情が 大好物。 ピンと立った ツノが 人間の 気持ちを キャッチする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホロウショット" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863609,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [353],
};

export default card;
