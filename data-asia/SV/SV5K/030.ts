import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ユニラン",
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "テレパシーで 意思を 送りあう。 強いショックを 受けると 体を 包む 液体が 漏れ出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752795,
				tcgplayer: 568364,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [577],
};

export default card;
