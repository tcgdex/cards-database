import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
	},

	illustrator: "Yoshimoto Yoshimon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "人懐こく 誠実な 性格。 敵には ほえて かみつき 追い払おうとする。"
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "うしろげり" },
			damage: 50,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900101,
				tcgplayer: 709231,
				cardtrader: 403161,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [58],
};

export default card;
