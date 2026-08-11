import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "視線が 合ったら 危険！ 相手を 選ばず 頭突きで 襲ってくる 厄介者だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いっぱつげり" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766673,
				tcgplayer: 587900,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [559],
};

export default card;
