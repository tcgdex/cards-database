import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴビット",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "古代人が しもべに するため 粘土を こねて こしらえたらしいが エネルギー源は 不明だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 50,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899935,
				tcgplayer: 709186,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [622],
};

export default card;
