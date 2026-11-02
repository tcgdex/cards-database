import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミラーアタック" },
			damage: "10+",
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンが[P]ポケモンなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752793,
				tcgplayer: 568362,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [436],
};

export default card;
