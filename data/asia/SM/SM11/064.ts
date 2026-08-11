import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "民家に 忍びこみ コンセントから 電気を 盗む。 電気代が おかしいときは こいつの 仕業。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おんがえし" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557026,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [702],
};

export default card;
